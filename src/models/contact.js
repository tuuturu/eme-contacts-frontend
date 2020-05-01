function cleanName(name) {
	const parts = name.split(' ')
	const result = { first_name: parts[0] }

	if (parts.length > 1) result.last_name = parts[1]

	return result
}

export default class {
	constructor(raw = {}) {
		this.id = raw.id || ''
		this.first_name = raw.first_name || ''
		this.last_name = raw.last_name || ''
		this.phone = raw.phone || ''
		this.email = raw.email || ''

		if (raw.full_name) this.setName(raw.full_name)

		return this
	}

	fullName() {
		let name = this.first_name + ''
		if (this.last_name) name += ' ' + this.last_name

		return name
	}

	setName(name) {
		const cleaned = cleanName(name)

		if (cleaned.first_name) this.first_name = cleaned.first_name
		if (cleaned.last_name) this.last_name = cleaned.last_name
	}

	serialize() {
		const result = {}

		for (const key in this) if (this[key]) result[key] = this[key]

		return result
	}
}

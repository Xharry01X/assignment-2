import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    end_year: { type: String, default: '' },
    intensity: { type: Number, default: ''  },
    sector: { type: String,default: ''  },
    topic: { type: String,  default: '' },
    insight: { type: String, default: ''  },
    url: { type: String,  default: '' },
    region: { type: String, default: '' },
    start_year: { type: String, default: '' },
    impact: { type: String, default: '' },
    added: { type: Date, default: ''  },
    published: { type: Date,default: ''   },
    country: { type: String, default: ''  },
    relevance: { type: Number,default: ''  },
    pestle: { type: String, default: '' },
    source: { type: String,default: '' },
    title: { type: String, default: ''  },
    likelihood: { type: Number,default: ''  }
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

export default Data;

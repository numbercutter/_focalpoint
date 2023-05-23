// pages/api/quotes.js

export default function handler(req, res) {
    const quotes = [
      {
        id: 1,
        text: 'Regarding psychiatry, the placebo effect has a substantial role in most of psychiatric conditions',
        author: 'Ivan Požgain 1, Zrinka Požgain, Dunja Degmečić',
        source: 'PMID: 24909245',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24909245/'
      },
      {
        id: 2,
        text: 'The term placebo has first been mentioned in the Scriptures, but it was not until the 19th century that it appeared in a medical context.',
        author: 'Efrat Czerniak 1, Michael Davidson',
        source: 'PMID: 22608298',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22608298/'
      },
      {
        id: 3,
        text: 'the subsequent wave of empirical studies that, starting from the 1970s, have investigated the psychological, pharmacological and neurobiological mechanisms of placebo effects.',
        author: 'Marco Annoni 1',
        source: 'PMID: 32563292',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32563292/'
      },
      {
        id: 4,
        text: 'Placebo effects are neurologically encoded predictions, less what patients think and more what they enact and perform.',
        author: 'Ted J Kaptchuk',
        source: 'PMID: 30293971',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30293971/'
      },
      {
        id: 5,
        text: 'In this way, it shows that placebo effects are evidence based, clinically relevant, and potentially ethical tools for relieving chronic pain.',
        author: 'Ted J Kaptchuk 1 2, Christopher C Hemond 3 2, Franklin G Miller 4',
        source: 'PMID: 32690477',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32690477/'
      },
      {
        id: 6,
        text: 'Recent research shows that placebo effects are genuine psychobiological events attributable to the overall therapeutic context, and that these effects can be robust in both laboratory and clinical settings.',
        author: 'Damien G Finniss 1, Ted J Kaptchuk, Franklin Miller, Fabrizio Benedetti',
        source: 'PMID: 20171404',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20171404/'
      }
    ];
  
    res.status(200).json(quotes);
  }
  
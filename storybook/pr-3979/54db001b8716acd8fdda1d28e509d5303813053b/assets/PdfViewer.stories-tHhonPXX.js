import{j as r,M as p}from"./iframe-Xc_JH78I.js";import{u as d}from"./useOsdkObject-DOPq3m6B.js";import{P as s}from"./pdf-viewer-C33F1GDH.js";import{E as a}from"./Employee-BAk2o20h.js";import"./preload-helper-AYl1pujm.js";import"./makeExternalStore-DfyUf4Br.js";import"./PdfViewer-DFM3n76K.js";import"./svgIconContainer-CQmggZ37.js";import"./useBaseUiId-BI3SiDaB.js";import"./Input-BFx2x6nA.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./CompositeRoot-DQx8BA1N.js";import"./CompositeItem-B_3aLVYQ.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./index-Bp1R9O-s.js";import"./chevron-right-B5er9inO.js";import"./spin-BsDWnG40.js";import"./error-D-Pc-XbV.js";import"./withOsdkMetrics-CzAtW5Pc.js";const _={title:"Components/DocumentViewer/Renderers/PdfViewer",component:s,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:i}=d(a,p);return i||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(s,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,_ as default};

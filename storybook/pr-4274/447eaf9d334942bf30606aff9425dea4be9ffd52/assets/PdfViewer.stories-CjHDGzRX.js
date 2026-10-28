import{j as r,M as s}from"./iframe-C8k3uumS.js";import{P as p}from"./pdf-viewer-Dhnz3k-y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIvRFOKN.js";import"./preload-helper-Dj6SQCER.js";import"./PdfViewer-DHrdbnXr.js";import"./index-Da9JAcME.js";import"./BasePdfViewer-D_AoTPxr.js";import"./BasePdfViewer.module.css-SRucL4YG.js";import"./PdfViewerAnnotationLayer-CXlmBS5R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRqn1Ztx.js";import"./PdfViewerOutlineSidebar-DZHO0nQp.js";import"./PdfViewerSidebarHeader-DTd1EmT7.js";import"./useBaseUiId-DFXqCjvq.js";import"./useControlled-C2PJbUNw.js";import"./CompositeRoot-Am1Pq9vl.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./composite-DxAUAqur.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./PdfViewerSearchBar-3W1fPE50.js";import"./chevron-up-BOBf7BBR.js";import"./chevron-down-Biem--ni.js";import"./cross-Dp2ox1xu.js";import"./PdfViewerSidebar-DnkFHPTn.js";import"./index-CEB9MiMS.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./PdfViewerToolbar-Y9XsmT9C.js";import"./Button-CBL5cv9S.js";import"./chevron-right-BqR0RiPH.js";import"./Input--AleI5pt.js";import"./search-DKEa9C8l.js";import"./spin-BPJA4GXh.js";import"./error-DgFxq49l.js";import"./withOsdkMetrics-zb3RyNQY.js";import"./makeExternalStore-Xdq9roG-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};

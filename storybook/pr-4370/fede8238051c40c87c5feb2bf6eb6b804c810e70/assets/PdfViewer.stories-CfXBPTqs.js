import{j as r,M as s}from"./iframe-DNO5nHhn.js";import{P as p}from"./pdf-viewer-CJvaghzX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DweUn0fN.js";import"./preload-helper-DmJRiiyv.js";import"./PdfViewer-dItLrVdH.js";import"./index-B1zYgGoG.js";import"./BasePdfViewer-CIOuUVZo.js";import"./BasePdfViewer.module.css-BX0YhVLm.js";import"./PdfViewerAnnotationLayer-I0zsGlTb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwNXWBle.js";import"./PdfViewerOutlineSidebar-CnLRW-Oj.js";import"./PdfViewerSidebarHeader-C6ct0Zy7.js";import"./useBaseUiId-VJjRPmeN.js";import"./useControlled-DFdql7xi.js";import"./CompositeRoot-BFIbpMYC.js";import"./CompositeItem-50twUNd1.js";import"./ToolbarRootContext-XjIA09C4.js";import"./composite-BaAus-sy.js";import"./svgIconContainer-CrvnRU9F.js";import"./PdfViewerSearchBar-BYhbe8Ve.js";import"./chevron-up-BcMW1dnv.js";import"./chevron-down-CoqE-c4D.js";import"./cross-DkGiXpSw.js";import"./PdfViewerSidebar-CT75TUou.js";import"./index-CXgAIFbB.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./PdfViewerToolbar--JMXTJvf.js";import"./Button-RvpRTGgQ.js";import"./chevron-right-BnSi-PwH.js";import"./Input-DLMSp_LN.js";import"./search-D7RgJWVi.js";import"./spin-CHecdjBF.js";import"./error-BkrZNArB.js";import"./withOsdkMetrics-1wr3AqUj.js";import"./makeExternalStore-BOcAXB1x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

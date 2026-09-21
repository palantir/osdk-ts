import{j as r,M as s}from"./iframe-ClmmZ3bm.js";import{P as p}from"./pdf-viewer-Bb5Rb-3c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkwwswKj.js";import"./preload-helper-BZo60ewl.js";import"./PdfViewer-ByIdoRvt.js";import"./index-DIDi76XU.js";import"./BasePdfViewer-Cc0GOLUN.js";import"./BasePdfViewer.module.css-hvlFZmKR.js";import"./PdfViewerAnnotationLayer-C3dRhC-q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHLZOWR-.js";import"./PdfViewerOutlineSidebar-DHn1EzRW.js";import"./PdfViewerSidebarHeader-B3gWOKKV.js";import"./useBaseUiId-WUEu06gE.js";import"./useControlled-DgsYzmvX.js";import"./CompositeRoot-BxNeDdLl.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./composite-DFQP3WzO.js";import"./svgIconContainer-CXmUB5_k.js";import"./PdfViewerSearchBar-VlauXFxk.js";import"./chevron-up-CAMAxbx2.js";import"./chevron-down-cWg0tuLd.js";import"./cross-BZIbyAfw.js";import"./PdfViewerSidebar-BbcEDmGo.js";import"./index-BYMK15VD.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./PdfViewerToolbar-C3f9njCO.js";import"./Button-BC65lBcv.js";import"./chevron-right-BEIc206Y.js";import"./Input-prqFStI6.js";import"./search-BSdPNEqM.js";import"./spin-BPbqP_eK.js";import"./error-joC9U9D6.js";import"./withOsdkMetrics-3RKVNbyO.js";import"./makeExternalStore-BNsO-POR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

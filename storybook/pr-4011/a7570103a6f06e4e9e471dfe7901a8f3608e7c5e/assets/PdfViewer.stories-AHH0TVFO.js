import{j as r,M as s}from"./iframe-BD39Do8C.js";import{P as p}from"./pdf-viewer-DiC_y9jl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Be5S9957.js";import"./preload-helper-JSiQ8WbR.js";import"./PdfViewer-CXHK4vz7.js";import"./index-BCxf04aV.js";import"./BasePdfViewer-iTj98a0o.js";import"./BasePdfViewer.module.css-vq8YWVrG.js";import"./PdfViewerAnnotationLayer-8_hOxY4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fKyHT4hI.js";import"./PdfViewerOutlineSidebar-taaZxepA.js";import"./PdfViewerSidebarHeader-CwxhamPq.js";import"./useBaseUiId-CixWZYdi.js";import"./useControlled-eZ44qZZ0.js";import"./CompositeRoot-cE8fIZuj.js";import"./CompositeItem-ucwXIdj-.js";import"./ToolbarRootContext-CEznXclz.js";import"./composite-Dw7ZpZcU.js";import"./svgIconContainer-BGfZ28Se.js";import"./PdfViewerSearchBar-DHMmhbeb.js";import"./chevron-up-DOjPgZ4U.js";import"./chevron-down-Xa2zxhAU.js";import"./cross-CMhnMXoS.js";import"./PdfViewerSidebar-BMQUdtvJ.js";import"./index-C4HeAi2L.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./PdfViewerToolbar-D4P_TlQw.js";import"./Button-u59jaYGp.js";import"./chevron-right-BJZlejlM.js";import"./Input-C2jmuYOz.js";import"./search-DKvlAX7y.js";import"./spin-C-Aoqyhx.js";import"./error-Bjl2LrVO.js";import"./withOsdkMetrics-Dp5pMzPZ.js";import"./makeExternalStore-3auNYjTa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

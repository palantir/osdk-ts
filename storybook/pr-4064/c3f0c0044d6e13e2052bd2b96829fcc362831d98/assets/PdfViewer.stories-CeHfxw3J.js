import{j as r,M as s}from"./iframe-KfcHTeg1.js";import{P as p}from"./pdf-viewer-CP9-sxQA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Djnrt0mX.js";import"./preload-helper-Bb9isu9Z.js";import"./PdfViewer-CzNv-MOR.js";import"./index-R7bO3Ag2.js";import"./BasePdfViewer-uSBVJITR.js";import"./BasePdfViewer.module.css-BvhsX8xh.js";import"./PdfViewerAnnotationLayer-DM1SOATv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HglXcJhf.js";import"./PdfViewerOutlineSidebar-CoGC9ZfE.js";import"./PdfViewerSidebarHeader-BffAz82a.js";import"./useBaseUiId-BkW36jG5.js";import"./useControlled-BGj-689N.js";import"./CompositeRoot-qV1MXk6I.js";import"./CompositeItem-D4098fQy.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./composite-SXE3lJSt.js";import"./svgIconContainer-Bg10ywbV.js";import"./PdfViewerSearchBar-tBmDraOw.js";import"./chevron-up-m63Rpbjo.js";import"./chevron-down-Vk4ljz0Y.js";import"./cross-CsyJ80xs.js";import"./PdfViewerSidebar-Dg-ujMj5.js";import"./index-BPifgcSB.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./PdfViewerToolbar-CZQaUH4r.js";import"./Button-DOEhPeJL.js";import"./chevron-right-B7zBiXz4.js";import"./Input-CN3mZMt5.js";import"./search-srmRE2lv.js";import"./spin-DEZpjMOy.js";import"./error-BE8S7DUo.js";import"./withOsdkMetrics-B7xTPOdu.js";import"./makeExternalStore-Dw3huE5n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

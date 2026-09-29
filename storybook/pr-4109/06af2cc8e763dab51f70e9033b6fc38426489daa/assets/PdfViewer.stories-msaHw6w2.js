import{j as r,M as s}from"./iframe-DFLNqEm2.js";import{P as p}from"./pdf-viewer-zbYyzjh8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dn1thUTE.js";import"./preload-helper-C4OJk57-.js";import"./PdfViewer-4DcbW3OJ.js";import"./index-fk_tQ1YC.js";import"./BasePdfViewer-DDLoZyrU.js";import"./BasePdfViewer.module.css-O-elniSr.js";import"./PdfViewerAnnotationLayer-BinwYSS4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJikRRfR.js";import"./PdfViewerOutlineSidebar-v9ZeCLAw.js";import"./PdfViewerSidebarHeader-CK-ph9iz.js";import"./useBaseUiId-f39Vd-uF.js";import"./useControlled-BgQ6tJlm.js";import"./CompositeRoot-CF6F3bHx.js";import"./CompositeItem-DHZAlp7N.js";import"./ToolbarRootContext-CH5CakMV.js";import"./composite-luK9vRGl.js";import"./svgIconContainer-5792X2so.js";import"./PdfViewerSearchBar-DX-PCbYi.js";import"./chevron-up-wmuGhB26.js";import"./chevron-down-CHUZ5wYq.js";import"./cross-DMqxAY0f.js";import"./PdfViewerSidebar-CY9c08ZW.js";import"./index-j4zmBLn_.js";import"./index-CA9B81mf.js";import"./index-BJjObxmA.js";import"./PdfViewerToolbar-B-Vs4jZ8.js";import"./Button-BbpsJ4er.js";import"./chevron-right-DyN2jX5d.js";import"./Input-CsKqmdcW.js";import"./search-LoblqU0W.js";import"./spin-BNHMbTkX.js";import"./error-C8Ukd2CZ.js";import"./withOsdkMetrics-BaDAnBzc.js";import"./makeExternalStore-Coy-sieI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

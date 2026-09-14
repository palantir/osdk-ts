import{j as r,M as s}from"./iframe-CdsRGRZD.js";import{P as p}from"./pdf-viewer-Dcc6j-T6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8TQaZlF.js";import"./preload-helper-CGHORiIs.js";import"./PdfViewer-D2ETWg9k.js";import"./index-Fk1WgWoL.js";import"./BasePdfViewer-CEjiPOXZ.js";import"./BasePdfViewer.module.css-IVpV1cNW.js";import"./PdfViewerAnnotationLayer-CgVZZ5qi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYEFb0ju.js";import"./PdfViewerOutlineSidebar-B5yhwv3J.js";import"./PdfViewerSidebarHeader-Bat2wYH8.js";import"./useBaseUiId-DiEHO-EU.js";import"./useControlled-CXpC8eD9.js";import"./CompositeRoot-D0yYNeXu.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./composite-DyS-Ch2i.js";import"./svgIconContainer-Cxkf-wd_.js";import"./PdfViewerSearchBar-CkOerJNt.js";import"./chevron-up-Ccvg19eS.js";import"./chevron-down-C7u5o2RL.js";import"./cross-DAi95Y0X.js";import"./PdfViewerSidebar-IPZm6kbd.js";import"./index-C2Mhw8zH.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./PdfViewerToolbar-DNXu68Bl.js";import"./Button-CMyVgQSr.js";import"./chevron-right-WlbHZvhZ.js";import"./Input-BrPBFCOf.js";import"./search-B-mt-Fpc.js";import"./spin-YLoSjhyU.js";import"./error-D2kK2TGa.js";import"./withOsdkMetrics-DzKI7pdO.js";import"./makeExternalStore-8ZflOwQq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

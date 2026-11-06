import{j as r,M as s}from"./iframe-DTR6D-RF.js";import{P as p}from"./pdf-viewer-CSSheWKz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dq3iW7Fy.js";import"./preload-helper-a_j-25GL.js";import"./PdfViewer-CWY8Fv_6.js";import"./index-D7jWhYyZ.js";import"./BasePdfViewer-BUcm9rUH.js";import"./BasePdfViewer.module.css-CZ2Wmw01.js";import"./PdfViewerAnnotationLayer-BLuP1p5F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8-SkeHzr.js";import"./PdfViewerOutlineSidebar-MVgincba.js";import"./PdfViewerSidebarHeader-5uz609Dz.js";import"./useBaseUiId-CSnUW2G1.js";import"./useControlled-BQyYOX0S.js";import"./CompositeRoot-DxzKScEv.js";import"./CompositeItem-DiX4k7Pe.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./composite-DubVH8wK.js";import"./svgIconContainer-CTdZIA2H.js";import"./PdfViewerSearchBar-BvH9hmAV.js";import"./chevron-up-BSOZXgqp.js";import"./chevron-down-D061nHxl.js";import"./cross-DUXytXdv.js";import"./PdfViewerSidebar-Bi0i4h-T.js";import"./index-DOZx46pQ.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./PdfViewerToolbar-B4WRNZ82.js";import"./Button-B369yMXX.js";import"./chevron-right-D8kdQEzq.js";import"./Input-BfVNpYWX.js";import"./search-CA4ezTkI.js";import"./spin-DUtD8Xgz.js";import"./error-ComocNo0.js";import"./withOsdkMetrics-BM7BKbHu.js";import"./makeExternalStore-HP359Ggt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

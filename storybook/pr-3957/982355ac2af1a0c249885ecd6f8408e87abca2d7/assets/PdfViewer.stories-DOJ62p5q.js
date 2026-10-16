import{j as r,M as s}from"./iframe-Ce3jEZMI.js";import{P as p}from"./pdf-viewer-Cvr4WlAC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dnt-oPQB.js";import"./preload-helper-zFlo1Ag_.js";import"./PdfViewer-D5oavE3s.js";import"./index-BWRu0lVk.js";import"./BasePdfViewer-CKQagz6F.js";import"./BasePdfViewer.module.css-CSpGl1J1.js";import"./PdfViewerAnnotationLayer-y8ak27rw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EYla1O4o.js";import"./PdfViewerOutlineSidebar-BzY3wUow.js";import"./PdfViewerSidebarHeader-D7ag6p38.js";import"./useBaseUiId-QnL0ah19.js";import"./useControlled-CEIiJDdv.js";import"./CompositeRoot-DM1zo66r.js";import"./CompositeItem-MWi5EakA.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./composite-ow-DJQ4K.js";import"./svgIconContainer-C7wsxhu-.js";import"./PdfViewerSearchBar-DuSNOnlm.js";import"./chevron-up-CIRW580U.js";import"./chevron-down-BQlmJQrq.js";import"./cross-BA6yBz5j.js";import"./PdfViewerSidebar-Des7EW6s.js";import"./index-NRrcQACQ.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./PdfViewerToolbar-T3BnsiQo.js";import"./Button-DAGPL7mA.js";import"./chevron-right-fh9jRJKZ.js";import"./Input-k1XluRBB.js";import"./search-BNuIHYDK.js";import"./spin-CJb9f62b.js";import"./error-C6zcgIRz.js";import"./withOsdkMetrics-Lf7fiJQ5.js";import"./makeExternalStore-B7_0KDnK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

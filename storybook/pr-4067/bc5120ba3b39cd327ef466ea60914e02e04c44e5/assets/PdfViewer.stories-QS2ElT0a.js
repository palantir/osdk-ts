import{j as r,M as s}from"./iframe-eyZPO-r8.js";import{P as p}from"./pdf-viewer-B7TaD2ya.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnibwmC2.js";import"./preload-helper-D1V99eN4.js";import"./PdfViewer-Bq8Wxr2B.js";import"./index-Gdnr7hdE.js";import"./BasePdfViewer-bqn1QZKF.js";import"./BasePdfViewer.module.css-BcBA4hyu.js";import"./PdfViewerAnnotationLayer-BmWRKY4s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRoWAtTv.js";import"./PdfViewerOutlineSidebar-BlGyes8K.js";import"./PdfViewerSidebarHeader-DsEC5c_x.js";import"./useBaseUiId-DuycL1XH.js";import"./useControlled-RnivCiUR.js";import"./CompositeRoot-B-KKg4_Z.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./composite-BQIBWjV1.js";import"./svgIconContainer-BYYEkT6q.js";import"./PdfViewerSearchBar-DTgEF2l7.js";import"./chevron-up-BhRUrBcF.js";import"./chevron-down-C6BwuTUh.js";import"./cross-BDtR8km0.js";import"./PdfViewerSidebar-BWwLn0Mo.js";import"./index-Dhfw8vgu.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./PdfViewerToolbar-BrZz7BDY.js";import"./Button-DYsGegFs.js";import"./chevron-right-DpMs_2jB.js";import"./Input-CwJlG5HX.js";import"./search-C_tBHa91.js";import"./spin-DdapRD8l.js";import"./error-vxQVtw9f.js";import"./withOsdkMetrics-O_Dwj_Kt.js";import"./makeExternalStore-TlPHbOId.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

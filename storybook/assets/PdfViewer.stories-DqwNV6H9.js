import{j as r,M as s}from"./iframe-D1DnRXYH.js";import{P as p}from"./pdf-viewer-DQpV_RS7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVsgRMse.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Gsxu0qDD.js";import"./index-BOVyYsBB.js";import"./BasePdfViewer-DzwrBxS7.js";import"./BasePdfViewer.module.css-BG-qNSqi.js";import"./PdfViewerAnnotationLayer-CEzsbEb7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrfzbI8S.js";import"./PdfViewerOutlineSidebar-D10umFkp.js";import"./PdfViewerSidebarHeader-DZl1tSZj.js";import"./useBaseUiId-BdlOppAL.js";import"./useControlled-BDwxO80n.js";import"./CompositeRoot-DDHEyw_h.js";import"./CompositeItem-COpco4va.js";import"./ToolbarRootContext-B2fwojw5.js";import"./composite-DS57evVk.js";import"./svgIconContainer-CThNxl0n.js";import"./PdfViewerSearchBar-GX9gNZQL.js";import"./chevron-up-CCzPTs37.js";import"./chevron-down-CE6TeLM9.js";import"./cross-CSUtUBCJ.js";import"./PdfViewerSidebar-CsIQ0eyK.js";import"./index-CRDubvT7.js";import"./index-fjVXZ-V0.js";import"./index-eqepVRHL.js";import"./PdfViewerToolbar-B_3Inwkg.js";import"./Button-7tq21DzM.js";import"./chevron-right-HLFwrezw.js";import"./Input-BXJLgeNm.js";import"./search-BbGlGWkG.js";import"./spin-CT9xy_AG.js";import"./error-PWaSqDvq.js";import"./withOsdkMetrics-BIY3fItA.js";import"./makeExternalStore-RyYPhhMJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

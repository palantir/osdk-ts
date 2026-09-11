import{j as r,M as s}from"./iframe-B9P_guYe.js";import{P as p}from"./pdf-viewer-BHiBV_X0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFkkpi42.js";import"./preload-helper-DZKvLzKM.js";import"./PdfViewer-BhjQ9p8r.js";import"./index-BmU_yXsT.js";import"./BasePdfViewer-C0VvbYo0.js";import"./BasePdfViewer.module.css-CSQQ_Cf7.js";import"./PdfViewerAnnotationLayer-DdghZTKq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ba8PiwPa.js";import"./PdfViewerOutlineSidebar-2UJ88A9t.js";import"./PdfViewerSidebarHeader-DbQ2cyPX.js";import"./useBaseUiId-4Ig60Xd8.js";import"./useControlled-CCs_p_PA.js";import"./CompositeRoot-DfQ8WP8h.js";import"./CompositeItem-G1VIkMjr.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./composite-0HTyS9cl.js";import"./svgIconContainer-86dgqwTy.js";import"./PdfViewerSearchBar-CerF0zQd.js";import"./chevron-up-BBiulZHL.js";import"./chevron-down-CL_Pf9bS.js";import"./cross-B0jMy4Xj.js";import"./PdfViewerSidebar-CMJqQoeD.js";import"./index-UwB-iCL8.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./PdfViewerToolbar-bsWYWJEl.js";import"./Button-BKlQWyYX.js";import"./chevron-right-B8UWNrfB.js";import"./Input-CexEAM7S.js";import"./search-_dMlLuUD.js";import"./spin-BFie9xFn.js";import"./error-B_xrvVtR.js";import"./withOsdkMetrics-C2y3Ga9u.js";import"./makeExternalStore-B4SarOE2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

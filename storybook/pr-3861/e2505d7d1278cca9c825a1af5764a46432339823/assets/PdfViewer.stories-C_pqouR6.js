import{j as r,M as s}from"./iframe-BI8s_LEM.js";import{P as p}from"./pdf-viewer-ClBDAL08.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsXvm_A7.js";import"./preload-helper-2UIxwTHe.js";import"./PdfViewer-Dxtf_pQG.js";import"./index-Cdoej1rc.js";import"./BasePdfViewer-CZwIZcPK.js";import"./BasePdfViewer.module.css-BP5_EwIY.js";import"./PdfViewerAnnotationLayer-Chu0JPTR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-M5wngm.js";import"./PdfViewerOutlineSidebar-DbBqBnPD.js";import"./PdfViewerSidebarHeader-CL9n6Oou.js";import"./useBaseUiId-BeAhLVth.js";import"./useControlled-C9KhyXIr.js";import"./CompositeRoot-DFiEk9pV.js";import"./CompositeItem-LJzGPuj_.js";import"./ToolbarRootContext-DK00e0CZ.js";import"./composite-DBRFQf_M.js";import"./svgIconContainer-BP-rj0xG.js";import"./PdfViewerSearchBar-DTSLrhEh.js";import"./chevron-up-Dc1j2y_D.js";import"./chevron-down-C-PF6_L5.js";import"./cross-BMpmO8GH.js";import"./PdfViewerSidebar-Ejbz8H8K.js";import"./index-A6vp9cHu.js";import"./index-BYp5baBX.js";import"./index-D73snmm6.js";import"./PdfViewerToolbar-CVAcF53L.js";import"./Button-CleaIGAw.js";import"./chevron-right-CmyvylXQ.js";import"./Input-BsZHTTke.js";import"./search-Du5SutCf.js";import"./spin-CSU6BrBt.js";import"./error-BKT0KUzG.js";import"./withOsdkMetrics-BNQD1U6q.js";import"./makeExternalStore-CASfG9zJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

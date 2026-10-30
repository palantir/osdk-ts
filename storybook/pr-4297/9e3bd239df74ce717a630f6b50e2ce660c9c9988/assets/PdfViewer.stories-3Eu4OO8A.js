import{j as r,M as s}from"./iframe-C8YzkEKz.js";import{P as p}from"./pdf-viewer-CIxi44Rm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTGjEMh5.js";import"./preload-helper-B8sJgEbx.js";import"./PdfViewer-STaIjoSL.js";import"./index-C-Vxog0Y.js";import"./BasePdfViewer-CkaKjpac.js";import"./BasePdfViewer.module.css-BA7A_9BY.js";import"./PdfViewerAnnotationLayer-CH3IuAdm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXFCnmgY.js";import"./PdfViewerOutlineSidebar-C-tNA03D.js";import"./PdfViewerSidebarHeader-D6K4wr_k.js";import"./useBaseUiId-4XXFTLSd.js";import"./useControlled-CCblLEGd.js";import"./CompositeRoot-BDdZPLcg.js";import"./CompositeItem-CygnWs4n.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./composite-DSkWtwuy.js";import"./svgIconContainer-_UKoevk1.js";import"./PdfViewerSearchBar-oSpgjkVf.js";import"./chevron-up-B3GxVzPg.js";import"./chevron-down-DAumFw1T.js";import"./cross-CSu4FEcq.js";import"./PdfViewerSidebar-CvCDNR6Y.js";import"./index-DH0qhbVu.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./PdfViewerToolbar-D9a1LluE.js";import"./Button-XJjUiBNX.js";import"./chevron-right-Bw3FZhoR.js";import"./Input-XPv58Dmh.js";import"./search-0pSkbv3G.js";import"./spin-Cs6Qienv.js";import"./error-C6Q2i6Lc.js";import"./withOsdkMetrics-ClUT4fsQ.js";import"./makeExternalStore-DCdwwz1M.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

import{j as r,M as s}from"./iframe-DbTMqywr.js";import{P as p}from"./pdf-viewer-BnbtbS3j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBXO7-VD.js";import"./preload-helper-CplCMsOq.js";import"./PdfViewer-_aXko-Ov.js";import"./index-DrdNpw1u.js";import"./BasePdfViewer-DByyz56r.js";import"./BasePdfViewer.module.css-DonH-4Z4.js";import"./PdfViewerAnnotationLayer-BHa_U0zJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tsweMhcC.js";import"./PdfViewerOutlineSidebar-ClrCSk3z.js";import"./PdfViewerSidebarHeader-HVCSLePL.js";import"./useBaseUiId-kPb3HUGs.js";import"./useControlled-DbEVD0lO.js";import"./CompositeRoot-B-w8dHhW.js";import"./CompositeItem-hF1oPeOK.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./composite-EoFmCbIV.js";import"./svgIconContainer-1kdK0av6.js";import"./PdfViewerSearchBar-BCsEzTk8.js";import"./chevron-up-B7W8AI3f.js";import"./chevron-down-Bh3KWvIp.js";import"./cross-D4suWXRq.js";import"./PdfViewerSidebar-DdEpaFEk.js";import"./index-BioKUlDZ.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./PdfViewerToolbar-B5GOiMP_.js";import"./Button-B7bNBfe0.js";import"./chevron-right-BD0wG6k8.js";import"./Input-BLknSyNo.js";import"./search-CUcR83Lr.js";import"./spin-ClhlEgd8.js";import"./error-Du92aaZX.js";import"./withOsdkMetrics-C049M_96.js";import"./makeExternalStore-mtSSB5CA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

import{j as r,M as s}from"./iframe-D4r_-dEc.js";import{P as p}from"./pdf-viewer-CPv-n_cD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2o-RzEs.js";import"./preload-helper-6ZtcGGS6.js";import"./PdfViewer-DE5H8wOe.js";import"./index-7caLYRtX.js";import"./BasePdfViewer-Cx-_t2w3.js";import"./BasePdfViewer.module.css-cZr_qtBn.js";import"./PdfViewerAnnotationLayer-BBjTRKOg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCtSRty_.js";import"./PdfViewerOutlineSidebar-zsx1AMVz.js";import"./PdfViewerSidebarHeader-TlMWGBUW.js";import"./useBaseUiId-Di53fTVw.js";import"./useControlled-BmrimB4V.js";import"./CompositeRoot-CMhaHLOd.js";import"./CompositeItem-Dyw9HZNd.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./composite-DCTx9hyK.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./PdfViewerSearchBar-Dv07expf.js";import"./chevron-up-mxO02ags.js";import"./chevron-down-ToRQzCeL.js";import"./cross-D7UvadIv.js";import"./PdfViewerSidebar-mGD4Ci6c.js";import"./index-_HJbTBBE.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./PdfViewerToolbar-CJofUTcC.js";import"./Button-Bk2BCIeA.js";import"./chevron-right-6iupBwMV.js";import"./Input-B2HDaQON.js";import"./search-DXq3JDJP.js";import"./spin-BzsagPKW.js";import"./error-1vTQ2DTJ.js";import"./withOsdkMetrics-CYIlN546.js";import"./makeExternalStore-6c6hwxKy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

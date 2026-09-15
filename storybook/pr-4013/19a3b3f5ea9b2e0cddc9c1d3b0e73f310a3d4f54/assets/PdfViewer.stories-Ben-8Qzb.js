import{j as r,M as s}from"./iframe-CBLGayoe.js";import{P as p}from"./pdf-viewer-D-PR_SHa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DKLgSjzC.js";import"./preload-helper-iqQbXwPR.js";import"./PdfViewer-DOBnKE2y.js";import"./index-WWQs816-.js";import"./BasePdfViewer-oEk00yfH.js";import"./BasePdfViewer.module.css-DauxKyvd.js";import"./PdfViewerAnnotationLayer-Ctv1GGDS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_ESZImlG.js";import"./PdfViewerOutlineSidebar-B9yWnzdB.js";import"./PdfViewerSidebarHeader-Cnxrh98N.js";import"./useBaseUiId-1t0yXeWR.js";import"./useControlled-aG0yjyc1.js";import"./CompositeRoot-CovLw-d6.js";import"./CompositeItem-DM2eqzsD.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./composite-B0OuyU4e.js";import"./svgIconContainer-C6h86pFp.js";import"./PdfViewerSearchBar-PxEfV38M.js";import"./chevron-up-BzOQoAV6.js";import"./chevron-down-fvU8e7Xa.js";import"./cross-BsTZCMZo.js";import"./PdfViewerSidebar-E3jfumw5.js";import"./index-BlgAqsZh.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./PdfViewerToolbar-CMKnKq3L.js";import"./Button-CjUTiVzv.js";import"./chevron-right-BBO38uoi.js";import"./Input-B3gcQSCO.js";import"./search-fj4r3aII.js";import"./spin-D8ILn4jY.js";import"./error-pMIF5hcF.js";import"./withOsdkMetrics-BgHhPSx8.js";import"./makeExternalStore-C4cF0z0U.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

import{j as r,M as s}from"./iframe-Dl_BVvAW.js";import{P as p}from"./pdf-viewer-DHu4Xfix.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1C6w9gj.js";import"./preload-helper-CoCSiyLk.js";import"./PdfViewer-B3NzWGd2.js";import"./index-BCGo89vi.js";import"./BasePdfViewer-B-GkCKsq.js";import"./BasePdfViewer.module.css-XVgi-pOg.js";import"./PdfViewerAnnotationLayer-BUNKi7Dj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YWOSFlcE.js";import"./PdfViewerOutlineSidebar-CeL5FuD4.js";import"./PdfViewerSidebarHeader-Bb0gC_6H.js";import"./useBaseUiId-C3O-rg1C.js";import"./useControlled-Dp4z1YLv.js";import"./CompositeRoot-B2ETE1xy.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./ToolbarRootContext-CvPGHntn.js";import"./composite-4Jq0kXzk.js";import"./svgIconContainer-DBQRMjom.js";import"./PdfViewerSearchBar-BOsUVl4H.js";import"./chevron-up-D1vdO2QD.js";import"./chevron-down-BnUWx6eY.js";import"./cross-Bz7-buWb.js";import"./PdfViewerSidebar-BS_HPV3-.js";import"./index-C3M7Abp4.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./PdfViewerToolbar-CprlR5zN.js";import"./Button-6LB6U_zx.js";import"./chevron-right-COeWtyPK.js";import"./Input-B7ojI8Bn.js";import"./search-DcMarGsx.js";import"./spin-CYnDa_z8.js";import"./error-iTPjK_eI.js";import"./withOsdkMetrics-auuyIGEA.js";import"./makeExternalStore-BEEUYNQZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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

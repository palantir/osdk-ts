import{j as r}from"./iframe-BAYjgPn_.js";import{O as b}from"./object-table-D44_X8da.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-By2b31Ex.js";import{u as g}from"./useOsdkClient-qospIppq.js";import"./preload-helper-BJCl-bRv.js";import"./Table-O1TVlUbQ.js";import"./index-DN0zke96.js";import"./Dialog-MEJqogj4.js";import"./cross-BXQxs_UM.js";import"./svgIconContainer-Bdz9mcrS.js";import"./useBaseUiId-Btxh7Hdv.js";import"./InternalBackdrop-B546RbTG.js";import"./composite-CSv2xCWn.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./index-B1NZC5HL.js";import"./useEventCallback-CIqiLNSA.js";import"./SkeletonBar-CIlY-zEK.js";import"./LoadingCell-Be4wMunU.js";import"./ColumnConfigDialog-BRNq5mWj.js";import"./DraggableList-Dkqic5TC.js";import"./search-iSsdT6KZ.js";import"./Input-1Y2R_X8G.js";import"./useControlled-SaIcnxAb.js";import"./Button-Zo--VZAt.js";import"./small-cross-Bf2eb-iw.js";import"./ActionButton-CZYvn9-t.js";import"./Checkbox-C5nK5KW-.js";import"./useValueChanged-ZImMoGMC.js";import"./CollapsiblePanel-GPhcuTeQ.js";import"./MultiColumnSortDialog-CaZRQ9xm.js";import"./MenuTrigger-Dtx__UvO.js";import"./CompositeItem-C-2rS0Vr.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./getDisabledMountTransitionStyles-ChyNZQXU.js";import"./getPseudoElementBounds-bTOtxTD8.js";import"./chevron-down-B1sc9iOG.js";import"./index-B-spnNIp.js";import"./error-DapfmyD2.js";import"./BaseCbacBanner-BVGponFm.js";import"./makeExternalStore-CGIpAmlW.js";import"./Tooltip-Cg4WV2Y-.js";import"./PopoverPopup-pcdPHlvL.js";import"./debounce-Bwm-jsNA.js";import"./tick-Bm2gRhmA.js";import"./DropdownField-BO1TnfSs.js";import"./isEqual-C3vn-jJx.js";import"./withOsdkMetrics-DE_nej2a.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};

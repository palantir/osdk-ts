import{j as i}from"./iframe-CKhREHfL.js";import{O as p}from"./object-table-de7N08mm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfF_cvvN.js";import"./preload-helper-DBUxvamd.js";import"./Table-CInxtrnC.js";import"./index-C5QFNAxP.js";import"./Dialog-D7aHGxIH.js";import"./cross-Ctdls4x7.js";import"./svgIconContainer-xQdtq3jL.js";import"./useBaseUiId-CxNcwInf.js";import"./InternalBackdrop-Da2U-hCq.js";import"./composite-DRC4ACh_.js";import"./index-B_JObfE5.js";import"./index-Bbvw0vLy.js";import"./index-D0pO9-WJ.js";import"./useEventCallback-C911K9Dx.js";import"./SkeletonBar-CqiWnmpN.js";import"./LoadingCell-BA0b1nsh.js";import"./ColumnConfigDialog-D_XzeQ3O.js";import"./DraggableList-B7Ku7Hqn.js";import"./search-BDUioyk4.js";import"./Input-BHAHokL6.js";import"./useControlled-DU_GLnf5.js";import"./isEqual-ZzYBlkqe.js";import"./isObject-DrlOELdm.js";import"./Button-BMZmhn3e.js";import"./ActionButton-DNfv6jVQ.js";import"./Checkbox-CV09gumM.js";import"./useValueChanged-1i6JVRlt.js";import"./CollapsiblePanel-CcAu94A8.js";import"./MultiColumnSortDialog-CwfvwQk-.js";import"./MenuTrigger-CsOslwJg.js";import"./CompositeItem-BvUhxEG9.js";import"./ToolbarRootContext-CUGbrwD0.js";import"./getDisabledMountTransitionStyles-Df-fM2Dk.js";import"./getPseudoElementBounds-DDXuDbup.js";import"./chevron-down-KTtBty24.js";import"./index-ChjJkDiV.js";import"./error-DVbvZX26.js";import"./BaseCbacBanner-CNcfqMp1.js";import"./makeExternalStore-qR4iZXdH.js";import"./Tooltip-D-yEypjt.js";import"./PopoverPopup-B_epRAt2.js";import"./toNumber-BmYL_tSw.js";import"./useOsdkClient-VcCE1wl4.js";import"./tick-6s5dMJuy.js";import"./DropdownField-DY-Xl2eR.js";import"./withOsdkMetrics-B8apvPCk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};

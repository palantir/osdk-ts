import{j as i}from"./iframe-pN3HhfHp.js";import{O as p}from"./object-table-BVMjORfS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CML0BvGn.js";import"./preload-helper-vaGveZOW.js";import"./Table-ukr5Vk0m.js";import"./index-DbLToRXl.js";import"./Dialog-BBKnzPwE.js";import"./cross--IVjn_-r.js";import"./svgIconContainer-BGAfUvl9.js";import"./useBaseUiId-Dk4L8uHt.js";import"./InternalBackdrop-Cq2Dn4lD.js";import"./composite-BAN-Mgn7.js";import"./index-Dk2VIyAU.js";import"./index-eDB9grVg.js";import"./index-DVAvO8QP.js";import"./useEventCallback-DRFMIxRN.js";import"./SkeletonBar-SVBlmV5n.js";import"./LoadingCell-8_2H7otS.js";import"./ColumnConfigDialog-B9vYKhII.js";import"./DraggableList-CjF70sG8.js";import"./search-DOtDYiw4.js";import"./Input-Dc026DBB.js";import"./useControlled-DsCbQ_G9.js";import"./Button-DxLN_Dfx.js";import"./small-cross-Dd991YFK.js";import"./ActionButton-QyR_0N_a.js";import"./Checkbox-BKYLSd86.js";import"./useValueChanged-CM5JXx-C.js";import"./CollapsiblePanel-C9anB2wf.js";import"./MultiColumnSortDialog-AIr20JE9.js";import"./MenuTrigger-DnA75f90.js";import"./CompositeItem-aJ_0QEux.js";import"./ToolbarRootContext-TcRvxzQ1.js";import"./getDisabledMountTransitionStyles-DJwc8JYd.js";import"./getPseudoElementBounds-DMqt3LfC.js";import"./chevron-down-CNN1sYpV.js";import"./index-ngzZObxc.js";import"./error-BB5T5PdG.js";import"./BaseCbacBanner-BHq6MjLo.js";import"./makeExternalStore-CIgwPDSw.js";import"./Tooltip-BIxc20c1.js";import"./PopoverPopup-egxkXViS.js";import"./debounce-CTYJHprQ.js";import"./useOsdkClient-Cwh2dI_Z.js";import"./tick-CZ1on5TM.js";import"./DropdownField-Msn_oTDJ.js";import"./isEqual-tW0a4BpI.js";import"./withOsdkMetrics-W_WGwbDq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

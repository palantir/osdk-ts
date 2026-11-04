import{j as i}from"./iframe-6oxuiw9Z.js";import{O as p}from"./object-table-3jbSUztS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNM3UQJy.js";import"./preload-helper-BTY9tSHX.js";import"./Table-pqx_radf.js";import"./index-DDLC59ec.js";import"./Dialog-Cd7a1III.js";import"./cross-DFvXSKDO.js";import"./svgIconContainer-CCWfPmIE.js";import"./useBaseUiId-CTF0uA8q.js";import"./InternalBackdrop-DBmGsDdc.js";import"./composite-D6aR9WOy.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./index-DVdku0Wi.js";import"./useEventCallback-BVuP13gs.js";import"./SkeletonBar-DzVrK6Gn.js";import"./LoadingCell-Ba_zo3cu.js";import"./ColumnConfigDialog-BoWl1kOd.js";import"./DraggableList-Ddn41pRq.js";import"./search-CEhUV7Cx.js";import"./Input-CFCgD2F3.js";import"./useControlled-Dfn-KuCH.js";import"./Button-BYfKNsB1.js";import"./small-cross-vimEE2_z.js";import"./ActionButton-IYlq4mb0.js";import"./Checkbox-CW5-sfvR.js";import"./useValueChanged-CP--SvLi.js";import"./CollapsiblePanel-CO8uQTa1.js";import"./MultiColumnSortDialog-ZV2q-T8B.js";import"./MenuTrigger-BFKWshZl.js";import"./CompositeItem-CxzD_nac.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./getDisabledMountTransitionStyles-DTLBovES.js";import"./getPseudoElementBounds-B_PMHS6a.js";import"./chevron-down-D5GnK5oF.js";import"./index-Buj0z2vt.js";import"./error-CCmYgvH-.js";import"./BaseCbacBanner-DaxLSJFu.js";import"./makeExternalStore-C5lUPI7i.js";import"./Tooltip-XVfngFaQ.js";import"./PopoverPopup-BcnCQgbT.js";import"./debounce-DF-eexkr.js";import"./useOsdkClient-B4tnXDgL.js";import"./tick-CaZ2jGqn.js";import"./DropdownField-B7TAl7Ih.js";import"./isEqual-DzVGf6G7.js";import"./withOsdkMetrics-DqypzTOB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

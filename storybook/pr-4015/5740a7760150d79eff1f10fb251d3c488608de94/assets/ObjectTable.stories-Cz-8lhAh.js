import{j as i}from"./iframe-BTZXjcS6.js";import{O as p}from"./object-table-D_sLcuJX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BMGgytcl.js";import"./preload-helper-C9NzPdgc.js";import"./Table-DPotH737.js";import"./index-CeqBwR3m.js";import"./Dialog-CKsDrnqD.js";import"./cross-B7KIcqou.js";import"./svgIconContainer-B_6Ye4VC.js";import"./useBaseUiId-BYa5JSvm.js";import"./InternalBackdrop-D9v-IY9L.js";import"./composite-Bir0R2T2.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./index-D4TIv0Oq.js";import"./useEventCallback-C8TjJx_C.js";import"./SkeletonBar-Cl9ArMG3.js";import"./LoadingCell-BQH4NmwW.js";import"./ColumnConfigDialog-DrgaikaZ.js";import"./DraggableList-DwILAAnX.js";import"./search-B_jja5k9.js";import"./Input-CufnAxBU.js";import"./useControlled-D3czSe4k.js";import"./Button-tBNbm5Ca.js";import"./small-cross-C8iYyEOq.js";import"./ActionButton-DtvrG6sU.js";import"./Checkbox-D1G0cO7j.js";import"./useValueChanged-dea3ckth.js";import"./CollapsiblePanel-CiJsgmp5.js";import"./MultiColumnSortDialog-C9vv9d7M.js";import"./MenuTrigger-QWlI38EG.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./getDisabledMountTransitionStyles-CE8RpoIN.js";import"./getPseudoElementBounds-CEAZG3b7.js";import"./chevron-down-BnB-eP8_.js";import"./index-BwVZwZx_.js";import"./error-CNEXn0eH.js";import"./BaseCbacBanner-6VvjFDu5.js";import"./makeExternalStore-CzWUEmmK.js";import"./Tooltip-4a177B8O.js";import"./PopoverPopup-C-rIrhf-.js";import"./debounce-BkHDw0VY.js";import"./useOsdkClient-Cw0tNi-2.js";import"./tick-CZ2olpkR.js";import"./DropdownField-BGDFHIhQ.js";import"./isEqual-BOZ0NKP1.js";import"./withOsdkMetrics-Ca4dglEg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

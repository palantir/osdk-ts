import{j as i}from"./iframe-BBjL-F6y.js";import{O as p}from"./object-table-CXgEsSVL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BgBjOKpP.js";import"./preload-helper-DNVbAuUc.js";import"./Table-ZazoxAIc.js";import"./index-YgwbFw5i.js";import"./Dialog-BS7ILeGP.js";import"./cross-DmliyvQK.js";import"./svgIconContainer-CHtsuizn.js";import"./useBaseUiId-CMNBQkED.js";import"./InternalBackdrop-BLmLXoC_.js";import"./composite-CUtkN34M.js";import"./index-kvFmoSiE.js";import"./index-R2_PcSMY.js";import"./index-CcQENiZT.js";import"./useEventCallback-CtDlrGU2.js";import"./SkeletonBar-Ck_nxwmH.js";import"./LoadingCell-BPP60fFV.js";import"./ColumnConfigDialog-C8dtcxLo.js";import"./DraggableList-1onnzR4p.js";import"./search-DTU0lDb9.js";import"./Input-wfcqgvpx.js";import"./useControlled-B4FriTOA.js";import"./Button-BVwSTECw.js";import"./small-cross-BAdgYS23.js";import"./ActionButton-CMs-ukEC.js";import"./Checkbox-B6nUj6Bc.js";import"./useValueChanged-Br0cAu9s.js";import"./CollapsiblePanel-DBvswhTh.js";import"./MultiColumnSortDialog-D8jxgPqR.js";import"./MenuTrigger-DA08kItI.js";import"./CompositeItem-C0luX3iR.js";import"./ToolbarRootContext-YS97F8pO.js";import"./getDisabledMountTransitionStyles-CeDfIUP4.js";import"./getPseudoElementBounds-DK-NlwaQ.js";import"./chevron-down-6vd3dKBy.js";import"./index-Cc2JD9jP.js";import"./error-CjgVLvJc.js";import"./BaseCbacBanner-Cq6uSAZ4.js";import"./makeExternalStore-D1LPwt7p.js";import"./Tooltip-BT8w1i9z.js";import"./PopoverPopup-OgEMtoaP.js";import"./debounce-C2ZfHN3V.js";import"./useOsdkClient-DkAGOt-l.js";import"./tick-DQggEu_6.js";import"./DropdownField-BzShEg54.js";import"./isEqual-CwEb78fT.js";import"./withOsdkMetrics-B0Y7OQ6I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

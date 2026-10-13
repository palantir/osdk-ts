import{j as i}from"./iframe-BEuky4nW.js";import{O as p}from"./object-table-C2soDB4g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TT2sV6eH.js";import"./preload-helper-DXZnQA0g.js";import"./Table-CJ0EqFZn.js";import"./index-DYYn-JJY.js";import"./Dialog-DD7QK3S4.js";import"./cross-Ti9XTUaD.js";import"./svgIconContainer-CnHhfA4g.js";import"./useBaseUiId-BQ-nlD4A.js";import"./InternalBackdrop-oGDKeqmq.js";import"./composite-DtclNBVm.js";import"./index-BT6wKmSC.js";import"./index-BM4hMUPD.js";import"./index-BcoFNaVU.js";import"./useEventCallback-CNTzT_sN.js";import"./SkeletonBar-CRaH-j-0.js";import"./LoadingCell-BfTtXoIB.js";import"./ColumnConfigDialog-DGLv9Lk9.js";import"./DraggableList-B8aF8W_-.js";import"./search-CUefFBvc.js";import"./Input-Bkp6Y8Kw.js";import"./useControlled-Ds39J2BB.js";import"./Button-BH8hgTyM.js";import"./small-cross-DKWq78XL.js";import"./ActionButton-DFTc9912.js";import"./Checkbox-BhIdaYL8.js";import"./useValueChanged-Dtjs-Tbs.js";import"./CollapsiblePanel-CbnUeaQj.js";import"./MultiColumnSortDialog-B8n3viKs.js";import"./MenuTrigger-D6-gBe2z.js";import"./CompositeItem-G9820lSK.js";import"./ToolbarRootContext-CUmbCPFZ.js";import"./getDisabledMountTransitionStyles-Draku-JZ.js";import"./getPseudoElementBounds-nyQ3hVZk.js";import"./chevron-down-D_q9Dus0.js";import"./index-B543OGGW.js";import"./error-J-Iw-CxZ.js";import"./BaseCbacBanner-Qb9Ngi8c.js";import"./makeExternalStore-BNzKZyz4.js";import"./Tooltip-DjGQvkmM.js";import"./PopoverPopup-bBDKUc20.js";import"./debounce-D5QhLxiq.js";import"./useOsdkClient-C8yO6X9s.js";import"./tick-C7A_Ekps.js";import"./DropdownField-DpUOV1YL.js";import"./isEqual-CN96Y6VV.js";import"./withOsdkMetrics-DVNHib_Z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

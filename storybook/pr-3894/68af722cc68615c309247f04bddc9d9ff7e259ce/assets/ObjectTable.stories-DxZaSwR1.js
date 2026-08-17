import{j as i}from"./iframe-_RccL5V-.js";import{O as p}from"./object-table-BWqXJxpP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVkLYxD_.js";import"./preload-helper-DD9OvIIK.js";import"./Table-DcC_Vlhh.js";import"./index-C6hccgOF.js";import"./Dialog-CFjdXxkD.js";import"./cross-CaF5yBdq.js";import"./svgIconContainer-Dkm7spTV.js";import"./useBaseUiId-DKx-HA2j.js";import"./InternalBackdrop-PGcyz6vF.js";import"./composite-DmZi_mQu.js";import"./index-C5klxPP6.js";import"./index-Cv-DuiVI.js";import"./index-DmEwvMYZ.js";import"./useEventCallback-BW47naCQ.js";import"./SkeletonBar-CujJHfJK.js";import"./LoadingCell-DyeBLpNq.js";import"./ColumnConfigDialog-Dx07fLmk.js";import"./DraggableList-a2VW3a69.js";import"./search-90zJh5kA.js";import"./Input-BrtWACOD.js";import"./useControlled-CcGBD7ay.js";import"./Button-CqbbN-n3.js";import"./small-cross-DkD11Lot.js";import"./ActionButton-BVQXVcb-.js";import"./Checkbox-DOqMBlHX.js";import"./useValueChanged-Dx-1nAgT.js";import"./CollapsiblePanel-DomQ1PEE.js";import"./MultiColumnSortDialog-XWI71dtA.js";import"./MenuTrigger-jxLgamJf.js";import"./CompositeItem-CyjZ1orr.js";import"./ToolbarRootContext-DPDAzzNp.js";import"./getDisabledMountTransitionStyles-B0EJhWbh.js";import"./getPseudoElementBounds-BxUCOJz2.js";import"./chevron-down-D0EZBNiO.js";import"./index-Bb5kSeb4.js";import"./error-DOBNWCIr.js";import"./BaseCbacBanner-gaJGghq7.js";import"./makeExternalStore-CPjz00Mq.js";import"./Tooltip-C8b9102L.js";import"./PopoverPopup-B0BKlT_Z.js";import"./debounce-DF3CmTOM.js";import"./useOsdkClient-C97lxKNX.js";import"./tick-Bv56pu8Q.js";import"./DropdownField-CgP9cILT.js";import"./isEqual-C8R8n9Yv.js";import"./withOsdkMetrics-CTkC1llm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-MMW7dAwl.js";import{O as p}from"./object-table-Dgt1ZBxM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhiAA12Y.js";import"./preload-helper-B0ldkDPT.js";import"./Table-CdvMaQRE.js";import"./index-Bsiwb6dc.js";import"./Dialog-BdywO4X-.js";import"./cross-Cwg16VXF.js";import"./svgIconContainer-C6Uusp65.js";import"./useBaseUiId-HrNAgH2Y.js";import"./InternalBackdrop-0Uby9gaG.js";import"./composite-D2ldOjEm.js";import"./index-DB82zLXB.js";import"./index-C7Hp3s63.js";import"./index-D8BO4rXm.js";import"./useEventCallback-DLFdmovf.js";import"./SkeletonBar-CqhfCaj7.js";import"./LoadingCell-pf5zHAth.js";import"./ColumnConfigDialog-CIFV5N9M.js";import"./DraggableList-Clicz9dW.js";import"./search-9a9jkQTY.js";import"./Input-CNsR-Nss.js";import"./useControlled-BCMHUgBa.js";import"./isEqual-Ih5cTHZu.js";import"./isObject-DSXrQIzp.js";import"./Button-CTqxWZbn.js";import"./ActionButton-Cq4L4xrS.js";import"./Checkbox-BVAhjTaX.js";import"./useValueChanged-CvjF7j3z.js";import"./CollapsiblePanel-BfMo-BHq.js";import"./MultiColumnSortDialog-Bmn6qLGE.js";import"./MenuTrigger-DBsleKge.js";import"./CompositeItem--prBu0t1.js";import"./ToolbarRootContext-C9oTADe7.js";import"./getDisabledMountTransitionStyles-DJDJDpp2.js";import"./getPseudoElementBounds-QIVbBUrC.js";import"./chevron-down-CE52ay4J.js";import"./index-BbTzuwcU.js";import"./error-BMLkI-Ib.js";import"./BaseCbacBanner-DWoXo0sK.js";import"./makeExternalStore-CkcVg9cu.js";import"./Tooltip-RUhOEPf4.js";import"./PopoverPopup-XsYEH1Hz.js";import"./toNumber-BniOij62.js";import"./useOsdkClient-CYb4YJag.js";import"./tick-B_RImugy.js";import"./DropdownField-DxdJvq24.js";import"./withOsdkMetrics-CLxjdcRk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

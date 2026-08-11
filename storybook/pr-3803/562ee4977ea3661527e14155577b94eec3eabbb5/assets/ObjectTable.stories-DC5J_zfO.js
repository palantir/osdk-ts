import{j as i}from"./iframe-fAfbdLhf.js";import{O as p}from"./object-table-CaYd998O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CCmXLI2a.js";import"./preload-helper-DWDN4VMu.js";import"./Table-C3JmlKo7.js";import"./index-CBwRWuPv.js";import"./Dialog-DCz7cHV2.js";import"./cross-ByzYitNg.js";import"./svgIconContainer-BBjFJa49.js";import"./useBaseUiId-DE9gu32f.js";import"./InternalBackdrop-BS8Cja_X.js";import"./composite-CtiB8fcn.js";import"./index-UPhMUfRS.js";import"./index-DpDZejss.js";import"./index-Dy9UXDXz.js";import"./useEventCallback-r0z5W8b6.js";import"./SkeletonBar-McMludcc.js";import"./LoadingCell-fGiZV1sq.js";import"./ColumnConfigDialog-C7OjEVZo.js";import"./DraggableList-CWadax09.js";import"./search-eStI4uI5.js";import"./Input-xMPnLU6F.js";import"./useControlled-BUpGFmgH.js";import"./isEqual-C83scye-.js";import"./isObject-BRg54IAs.js";import"./Button-D_3jmW16.js";import"./ActionButton-DGnJ6gFM.js";import"./Checkbox-DtOU4wvJ.js";import"./useValueChanged-BN058uvs.js";import"./CollapsiblePanel-BezM9uDM.js";import"./MultiColumnSortDialog-CutVSKHs.js";import"./MenuTrigger-BAXI7yhJ.js";import"./CompositeItem-AttJnCul.js";import"./ToolbarRootContext-CAvhaC10.js";import"./getDisabledMountTransitionStyles-CBMJ1zoA.js";import"./getPseudoElementBounds-6yubEjwS.js";import"./chevron-down-D5pYynjB.js";import"./index-9zEFE1EL.js";import"./error-1ACuOiBT.js";import"./BaseCbacBanner-BYgUg6SG.js";import"./makeExternalStore-CPFS4LBF.js";import"./Tooltip-CJvP9DJK.js";import"./PopoverPopup-GwDVfPwB.js";import"./toNumber-R8DRtlO1.js";import"./useOsdkClient-CwPXDR0m.js";import"./tick-Cef6tuE-.js";import"./DropdownField-DtiVj4Pt.js";import"./withOsdkMetrics-gL21sZFb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-ChCYWkFC.js";import{O as p}from"./object-table-B8V5n9QI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-WJfmEe8t.js";import"./preload-helper-2e0CXzEG.js";import"./Table-DdOs5DiG.js";import"./index-Be19pAzV.js";import"./Dialog-DiAl1dGe.js";import"./cross-BkiSPzBk.js";import"./svgIconContainer-C2FhCoFe.js";import"./useBaseUiId-D7_MSijo.js";import"./InternalBackdrop-CzrE4rQX.js";import"./composite-Dsg-9HAA.js";import"./index-D9paw9rd.js";import"./index-CeE-gYem.js";import"./index-Sj4nune6.js";import"./useEventCallback-C5Q-Fk9J.js";import"./SkeletonBar-CZyrUc0Z.js";import"./LoadingCell-D2VM2uWE.js";import"./ColumnConfigDialog-BN4-d9R6.js";import"./DraggableList-xXmrPcMZ.js";import"./search-D9jFpevZ.js";import"./Input-BD-LZGDG.js";import"./useControlled-Cy91VBio.js";import"./isEqual-CUS8mcyZ.js";import"./isObject-D0a6_sYT.js";import"./Button-DPenXW8U.js";import"./ActionButton-lOa1i4jD.js";import"./Checkbox-CRTz6qdh.js";import"./useValueChanged-DJZIY-Cm.js";import"./CollapsiblePanel-BhUHDzpm.js";import"./MultiColumnSortDialog-Br-y3SjY.js";import"./MenuTrigger-ClS1UY1q.js";import"./CompositeItem-BwVCbGsl.js";import"./ToolbarRootContext-Bp-TiK-m.js";import"./getDisabledMountTransitionStyles-CcH0c07C.js";import"./getPseudoElementBounds-aG8uwwHI.js";import"./chevron-down-sfySf6B-.js";import"./index-DvYGmwtE.js";import"./error-lNGXoKCc.js";import"./BaseCbacBanner-BYdLPlbE.js";import"./makeExternalStore-BdUDleba.js";import"./Tooltip-DHh8c6jU.js";import"./PopoverPopup-CHAYmNQc.js";import"./toNumber-B5PO3x__.js";import"./useOsdkClient-D1FULPKE.js";import"./tick-Du832I-m.js";import"./DropdownField-CTYOA5hJ.js";import"./withOsdkMetrics-CuxbWZN_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-DxhkFI2j.js";import{O as p}from"./object-table-slaHud4u.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DkjCBG7_.js";import"./preload-helper--cN_jItM.js";import"./Table-i5kZBEKo.js";import"./index-DVJz8wW_.js";import"./Dialog-CKYNsASz.js";import"./cross-BLpXMPe1.js";import"./svgIconContainer-DVO7NdYN.js";import"./useBaseUiId-C54mcYTS.js";import"./InternalBackdrop-aZ_35dbO.js";import"./composite-CohQOjSI.js";import"./index-C1nkpuUA.js";import"./index-BpgIDDBL.js";import"./index-D7092Ody.js";import"./useEventCallback-MoMmp1Ig.js";import"./SkeletonBar-CgnvwVJl.js";import"./LoadingCell-CaiZTiWX.js";import"./ColumnConfigDialog-HX2GxGQF.js";import"./DraggableList-DeiP1ftY.js";import"./search-E8ja1e9g.js";import"./Input-COHFDix-.js";import"./useControlled-CrH9oqwV.js";import"./Button-Cavox7D-.js";import"./small-cross-DhzKRe0M.js";import"./ActionButton-BUSMwbnp.js";import"./Checkbox-CXP57loB.js";import"./useValueChanged-BpuEkHow.js";import"./CollapsiblePanel-Cuwr74Hw.js";import"./MultiColumnSortDialog-DktJcNWB.js";import"./MenuTrigger-CfI6O0-8.js";import"./CompositeItem-Cf1SIU17.js";import"./ToolbarRootContext-e2y-n1Yh.js";import"./getDisabledMountTransitionStyles-BV-oK1o7.js";import"./getPseudoElementBounds-CRJR5h2h.js";import"./chevron-down-DTSGl_xB.js";import"./index-BD1sd-aL.js";import"./error-BmTcrgoE.js";import"./BaseCbacBanner-KgEBwAOi.js";import"./makeExternalStore-CoWtabiz.js";import"./Tooltip-CQ4YGG8B.js";import"./PopoverPopup-CWVn6OUK.js";import"./debounce-b65eNSpY.js";import"./useOsdkClient-85CPOR81.js";import"./tick-W6nypDvp.js";import"./DropdownField-DwO_XOP0.js";import"./isEqual-B81PYfVj.js";import"./withOsdkMetrics-BMPSufl2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-BzgeOfJo.js";import{O as p}from"./object-table-CcppgmG_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BgorSf4v.js";import"./preload-helper-Bkrr1btE.js";import"./Table-ChpIbJnY.js";import"./index-0sS4DK38.js";import"./Dialog-BZEvx_K9.js";import"./cross-CDPJxVBK.js";import"./svgIconContainer-DfG8sdKE.js";import"./useBaseUiId-CXJNSrJM.js";import"./InternalBackdrop-BayFq1HO.js";import"./composite-B4xmkZhl.js";import"./index-CGtuAssr.js";import"./index-BF9eciPM.js";import"./index-Do1t6yvi.js";import"./useEventCallback-DoNQJm52.js";import"./SkeletonBar-DtVWZo4V.js";import"./LoadingCell-tQGaf6Fy.js";import"./ColumnConfigDialog-CAYn7V1z.js";import"./DraggableList-D722nH37.js";import"./search-D0znHoB0.js";import"./Input-uW-V73Ym.js";import"./useControlled-CCMODMjy.js";import"./isEqual-B3eAqf2z.js";import"./isObject-WM2S0FIl.js";import"./Button-CMlQCxNr.js";import"./ActionButton-CzlEqbU-.js";import"./Checkbox-DoYSW_5U.js";import"./useValueChanged-CsD6JbCM.js";import"./CollapsiblePanel-nnSQYfou.js";import"./MultiColumnSortDialog-CN8uVtgE.js";import"./MenuTrigger-DIP-YTxW.js";import"./CompositeItem-hxBAdSix.js";import"./ToolbarRootContext-BPdZZUMs.js";import"./getDisabledMountTransitionStyles-CKX8M7fA.js";import"./getPseudoElementBounds-mxfkqN-r.js";import"./chevron-down-DWn-RMzw.js";import"./index-C4lWqJjv.js";import"./error-B2aj7L5W.js";import"./BaseCbacBanner-DhKW-D1J.js";import"./makeExternalStore-Bo_8jKeh.js";import"./Tooltip-DaUXTYBe.js";import"./PopoverPopup-lz77nYOE.js";import"./toNumber-B6i1rSxO.js";import"./useOsdkClient-DcUrkyFT.js";import"./tick-BblDtOqU.js";import"./DropdownField-DhpZ0Ims.js";import"./withOsdkMetrics-C1N_Pny7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

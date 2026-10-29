import{j as i}from"./iframe-BX7t1m7X.js";import{O as p}from"./object-table-Zl1h-uut.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cp_sFczi.js";import"./preload-helper-vs1LH6RG.js";import"./Table-D-Aw9cKN.js";import"./index-CWnEVrcD.js";import"./Dialog-DttKfTF_.js";import"./cross-DHmTrIXq.js";import"./svgIconContainer-B1_oouOg.js";import"./useBaseUiId-Bmd4FcfN.js";import"./InternalBackdrop-Bqks8j8N.js";import"./composite-quGdXDs4.js";import"./index-CKebcxwg.js";import"./index--sVV4r8-.js";import"./index-4mN2Lpue.js";import"./useEventCallback-DRCoKqNP.js";import"./SkeletonBar-DJLl5DO7.js";import"./LoadingCell-BfqcaVr4.js";import"./ColumnConfigDialog-Bivcx7bF.js";import"./DraggableList-BBHkSRR6.js";import"./search-BOoacuk7.js";import"./Input-ffGk1Cv0.js";import"./useControlled-CIYqr8vl.js";import"./Button-HBtTsXNU.js";import"./small-cross-DFcpXRfF.js";import"./ActionButton-BiSFjvED.js";import"./Checkbox-ChxnCNMp.js";import"./useValueChanged-DBl2Xes2.js";import"./CollapsiblePanel-Cz6hvxrp.js";import"./MultiColumnSortDialog-DMOTbytd.js";import"./MenuTrigger-DgwGgOKV.js";import"./CompositeItem-DzuKssIv.js";import"./ToolbarRootContext-D-cnH9Zf.js";import"./getDisabledMountTransitionStyles-Bay-uwBq.js";import"./getPseudoElementBounds-BbiKJCQA.js";import"./chevron-down-Bo5JkLwj.js";import"./index-BjcqwpJd.js";import"./error-CwXOiZUY.js";import"./BaseCbacBanner-tQlPlWcJ.js";import"./makeExternalStore-NTXRhgR1.js";import"./Tooltip-DMMK12H2.js";import"./PopoverPopup-CV61Ww1T.js";import"./debounce-BXIEVhi-.js";import"./useOsdkClient-hFqGetqy.js";import"./tick--CMC8WAi.js";import"./DropdownField-CKrqI4rI.js";import"./isEqual-ZeKprEqC.js";import"./withOsdkMetrics-XI_BAq5U.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

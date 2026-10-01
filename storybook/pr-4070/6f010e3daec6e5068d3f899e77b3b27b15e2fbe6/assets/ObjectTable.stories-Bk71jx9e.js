import{j as i}from"./iframe-cnARutXL.js";import{O as p}from"./object-table-KIs2Y_92.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRgZJ43X.js";import"./preload-helper-BmFSLRtI.js";import"./Table-BZDr9MPT.js";import"./index-DFLlU5DH.js";import"./Dialog-DxJLRM1k.js";import"./cross-PEBZaCxU.js";import"./svgIconContainer-BYzMgWJS.js";import"./useBaseUiId-D3qiS2j7.js";import"./InternalBackdrop-DicU1YCw.js";import"./composite-B8QB1mMF.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./index-DqmPoYcz.js";import"./useEventCallback-aBWFD298.js";import"./SkeletonBar-BQ6YS2N6.js";import"./LoadingCell-pS64WJpB.js";import"./ColumnConfigDialog-BHjWdYyi.js";import"./DraggableList-DGr317oE.js";import"./search-C7s-xGFv.js";import"./Input-DDwYvpo2.js";import"./useControlled-C2e7ttGZ.js";import"./Button-6fdr9V7a.js";import"./small-cross-zWY6BCii.js";import"./ActionButton-BDfWPIo4.js";import"./Checkbox-Cug8zVJm.js";import"./useValueChanged-CrFeGRAw.js";import"./CollapsiblePanel-CGfN3i0K.js";import"./MultiColumnSortDialog-YoqkDwqG.js";import"./MenuTrigger-CTBkW1T4.js";import"./CompositeItem-BZ25FDYT.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./getDisabledMountTransitionStyles-BkvoD3fE.js";import"./getPseudoElementBounds-BOblesbJ.js";import"./chevron-down-B7Voti3u.js";import"./index-W_p-C1mB.js";import"./error-D4N7FIX9.js";import"./BaseCbacBanner-C52atT9s.js";import"./makeExternalStore-CokpyCaz.js";import"./Tooltip-DAflEiX-.js";import"./PopoverPopup-C0e4SK-g.js";import"./debounce-CAhzqkJ2.js";import"./useOsdkClient-bAUKHK9v.js";import"./tick-UclQVZct.js";import"./DropdownField-CsNVs2BB.js";import"./isEqual-Cnxkpuk4.js";import"./withOsdkMetrics-Cob5tlpP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

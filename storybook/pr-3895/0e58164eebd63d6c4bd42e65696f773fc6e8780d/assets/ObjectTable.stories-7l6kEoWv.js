import{j as i}from"./iframe-DVwkDS8L.js";import{O as p}from"./object-table-CW5ks6O5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-n-d1Kj.js";import"./preload-helper-CuM_C8uX.js";import"./Table-DMznMLZl.js";import"./index-B2DFp03X.js";import"./Dialog-i0MtrM66.js";import"./cross-COGhdLyT.js";import"./svgIconContainer-r5K4UgUA.js";import"./useBaseUiId-D7rE6SNe.js";import"./InternalBackdrop-BuWd3sOl.js";import"./composite-CNYsr7GG.js";import"./index-Bb7J_5Af.js";import"./index-Bh-tKDNJ.js";import"./index-C1CmYkA8.js";import"./useEventCallback-DGx2TQYW.js";import"./SkeletonBar-CqsYBrqh.js";import"./LoadingCell-Cl1hyvVa.js";import"./ColumnConfigDialog-DJh4qSym.js";import"./DraggableList-BvwpLn0D.js";import"./search-CaKxRlqq.js";import"./Input-BqPh0cED.js";import"./useControlled-CIDtoIkt.js";import"./Button-BqtiPfOB.js";import"./small-cross-BSPO3y5H.js";import"./ActionButton-BFQ96y8Q.js";import"./Checkbox-CALf-FUx.js";import"./useValueChanged-CR7gMkQc.js";import"./CollapsiblePanel-CnIQhtcV.js";import"./MultiColumnSortDialog-ChJwlnLI.js";import"./MenuTrigger-DWOC39EQ.js";import"./CompositeItem-oNLn9P67.js";import"./ToolbarRootContext-s0DCpxFM.js";import"./getDisabledMountTransitionStyles-a8KtX7wR.js";import"./getPseudoElementBounds-DfG2bGtj.js";import"./chevron-down-9KBxjP_q.js";import"./index-BuNntoD4.js";import"./error-D_Hj0Ztb.js";import"./BaseCbacBanner-at1GySGa.js";import"./makeExternalStore-DelJbyGr.js";import"./Tooltip-TE59fFno.js";import"./PopoverPopup-Bylv3mxH.js";import"./debounce-C4IZ_bH8.js";import"./useOsdkClient-Bu2ys2gj.js";import"./tick-LEloDUPv.js";import"./DropdownField-CCMXdF1T.js";import"./isEqual-DTWh5T8b.js";import"./withOsdkMetrics-D89qfQxD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

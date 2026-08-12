import{j as i}from"./iframe-B5w1MiMB.js";import{O as p}from"./object-table-Bm49LUOf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJMjFvdD.js";import"./preload-helper-CU1AtdIz.js";import"./Table-EvNA8qkA.js";import"./index-CtjXdvRc.js";import"./Dialog-DCphJ0pX.js";import"./cross-CV9fpUOl.js";import"./svgIconContainer-B7EdkAw1.js";import"./useBaseUiId-1DFIpK_I.js";import"./InternalBackdrop-BW8Gd5Of.js";import"./composite-DdCZUanX.js";import"./index-CLavCOv2.js";import"./index-Cxsp0K40.js";import"./index-fTS2FcWe.js";import"./useEventCallback-D_ZU_Z1u.js";import"./SkeletonBar-BxYwBM3V.js";import"./LoadingCell-yTv8ze3n.js";import"./ColumnConfigDialog-ztGs-pKV.js";import"./DraggableList-Xb0V2hTV.js";import"./search-CzP4ABR3.js";import"./Input-j9KFgO4e.js";import"./useControlled-N5ZmUmtW.js";import"./isEqual-Br14G6um.js";import"./isObject-DpLTSRhw.js";import"./Button-BwuNtGpm.js";import"./ActionButton-DVxnq_cx.js";import"./Checkbox-BBtx1TBv.js";import"./useValueChanged-DZFj9DWZ.js";import"./CollapsiblePanel-CzWau1En.js";import"./MultiColumnSortDialog-CoOnz_sI.js";import"./MenuTrigger-WoUnOu8V.js";import"./CompositeItem-B9-flLpX.js";import"./ToolbarRootContext-DXnkpKvw.js";import"./getDisabledMountTransitionStyles-Cmdfpae2.js";import"./getPseudoElementBounds-CNsqsAze.js";import"./chevron-down-BplLrpUt.js";import"./index-BqopfQQ5.js";import"./error-DbvnMx8s.js";import"./BaseCbacBanner-CmZfweLi.js";import"./makeExternalStore-DG987ZvC.js";import"./Tooltip-DkqaGoGi.js";import"./PopoverPopup-Cs-CmjK7.js";import"./toNumber-ncDJ6WAX.js";import"./useOsdkClient-3124dXLb.js";import"./tick-BZFtP7oe.js";import"./DropdownField-DmLTcL6M.js";import"./withOsdkMetrics-CMmNO-Cj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

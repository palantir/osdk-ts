import{j as i}from"./iframe-CGQ3pPyN.js";import{O as p}from"./object-table-DKrb4-FI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4yS_Km1z.js";import"./preload-helper-B0d8w61e.js";import"./Table-DoBnIyhe.js";import"./index-D5ulmSp4.js";import"./Dialog-Do0260gu.js";import"./cross-CaCixUkz.js";import"./svgIconContainer-PA2ZuagG.js";import"./useBaseUiId-D18qpYhV.js";import"./InternalBackdrop-DjO1M3j9.js";import"./composite-DdxnokEw.js";import"./index-DCTecv-n.js";import"./index-D6WjugAr.js";import"./index-BHKY8INM.js";import"./useEventCallback-BwYR426g.js";import"./SkeletonBar-DqORL0HU.js";import"./LoadingCell-DjGijCZw.js";import"./ColumnConfigDialog-C2jkpvMm.js";import"./DraggableList-Dz-wLxSF.js";import"./search-CFopY9hG.js";import"./Input-BT1Rp4mr.js";import"./useControlled-C3Ct7rRf.js";import"./isEqual-Ciq06rbL.js";import"./isObject-Dy21rycA.js";import"./Button-BXSTotUw.js";import"./ActionButton-C4bCZpUy.js";import"./Checkbox-COHiMF3O.js";import"./useValueChanged-CQYNvT_3.js";import"./CollapsiblePanel-BEauxQqy.js";import"./MultiColumnSortDialog-JeiG0Daz.js";import"./MenuTrigger-BUPHpPWe.js";import"./CompositeItem--3EFQsH0.js";import"./ToolbarRootContext-KxLfRu1W.js";import"./getDisabledMountTransitionStyles-D9Sj_mnF.js";import"./getPseudoElementBounds-inYkQB6U.js";import"./chevron-down-psR5H-K5.js";import"./index-D4-y_jb8.js";import"./error-DEEH7noa.js";import"./BaseCbacBanner-BHOTaf-T.js";import"./makeExternalStore-l1enNhmQ.js";import"./Tooltip-D2rI2oj9.js";import"./PopoverPopup-CCxZUCV2.js";import"./toNumber-D_eyv4TQ.js";import"./useOsdkClient-onJqe-G0.js";import"./tick-BO5FA_vb.js";import"./DropdownField-BJGMhAE7.js";import"./withOsdkMetrics-13L2_Pyz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-DeFJRJj_.js";import{O as p}from"./object-table-FpQH8zDH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaWxGL97.js";import"./preload-helper-qD0ucBRi.js";import"./Table-yqvulaG4.js";import"./index-ZhtX4fsv.js";import"./Dialog-CQAmh9mS.js";import"./cross-CrAtm1fx.js";import"./svgIconContainer-CTkWWvQN.js";import"./useBaseUiId-Bq3F6Rv_.js";import"./InternalBackdrop-I_xge_tr.js";import"./composite-zNv1yGvS.js";import"./index-D6kTPWWX.js";import"./index-BL95TNIJ.js";import"./index-PDfAbFc3.js";import"./useEventCallback-DOh_QwCs.js";import"./SkeletonBar-BCypp59V.js";import"./LoadingCell-C8Ob_9Qb.js";import"./ColumnConfigDialog-CYlKSxfl.js";import"./DraggableList-BzyMgYvc.js";import"./search-DY35zBxg.js";import"./Input-CsBuql1A.js";import"./useControlled-Dn21pgdp.js";import"./isEqual-7SFR467m.js";import"./isObject-BUAr3np9.js";import"./Button-CSCQK9mA.js";import"./ActionButton-ZjjCkAyn.js";import"./Checkbox-D454IOsY.js";import"./useValueChanged-Du1T7LSL.js";import"./CollapsiblePanel-DfGBm_UI.js";import"./MultiColumnSortDialog-CLinEGLK.js";import"./MenuTrigger-X1kUqg13.js";import"./CompositeItem-CZp4_PXj.js";import"./ToolbarRootContext-BL-4vvnE.js";import"./getDisabledMountTransitionStyles-3seGgd_O.js";import"./getPseudoElementBounds-YW0J0z3g.js";import"./chevron-down-aqXgsfqW.js";import"./index-CJ3Iicbp.js";import"./error-CZdOWqiH.js";import"./BaseCbacBanner-DdLprQAt.js";import"./makeExternalStore-D6AD-Szb.js";import"./Tooltip-tTWRSFbd.js";import"./PopoverPopup-BiBkyadf.js";import"./toNumber-B-Ufdoco.js";import"./useOsdkClient-CAv7eSZO.js";import"./tick-Kxgypmmn.js";import"./DropdownField-CKIbBTPW.js";import"./withOsdkMetrics-inWDWazQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

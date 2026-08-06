import{j as i}from"./iframe-Brj9Sbid.js";import{O as p}from"./object-table-BZ0MZy9P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cjp9y3XZ.js";import"./preload-helper-oLILJVBL.js";import"./Table-BH-RZNCP.js";import"./index-DvGT_2Rb.js";import"./Dialog-COLSia6k.js";import"./cross-DGEDR-iR.js";import"./svgIconContainer-BlZrGf5w.js";import"./useBaseUiId-DtogBb13.js";import"./InternalBackdrop-BlNxxS8w.js";import"./composite-DqYqntwB.js";import"./index-BpZgmo5w.js";import"./index-CwFbsAXM.js";import"./index-Ztr5QER3.js";import"./useEventCallback-COtfvcHe.js";import"./SkeletonBar-BbYnj_B5.js";import"./LoadingCell-CY4ngEPG.js";import"./ColumnConfigDialog-8P-8ZUWB.js";import"./DraggableList-CocCSwkY.js";import"./search-Bft1Biki.js";import"./Input-B_oVxWvi.js";import"./useControlled-DBZzTWcr.js";import"./isEqual-BbyvGaTy.js";import"./isObject-BtnLo4c4.js";import"./Button-S6siwBTp.js";import"./ActionButton-BABk4Pl1.js";import"./Checkbox-DMncT4kw.js";import"./useValueChanged-BLJ42nt0.js";import"./CollapsiblePanel-BbalYaX2.js";import"./MultiColumnSortDialog-TPqwtccN.js";import"./MenuTrigger-CiscVOMj.js";import"./CompositeItem-nP0KtzgK.js";import"./ToolbarRootContext-2sbonX9x.js";import"./getDisabledMountTransitionStyles-CZQAQSKz.js";import"./getPseudoElementBounds-u9mOl45S.js";import"./chevron-down-Bd6yaiTi.js";import"./index-BtFlrDNb.js";import"./error-C5CNb-QP.js";import"./BaseCbacBanner-ClkIB2_j.js";import"./makeExternalStore-JCpwxwwp.js";import"./Tooltip-CszSZdJE.js";import"./PopoverPopup-bU_8XjBZ.js";import"./toNumber-ClpiI6JA.js";import"./useOsdkClient-2oRxYRX2.js";import"./tick-DjhBTBL8.js";import"./DropdownField-Db4z1Gaj.js";import"./withOsdkMetrics-Cz2Nq3As.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

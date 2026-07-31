import{j as i}from"./iframe-CVw8lT_p.js";import{O as p}from"./object-table-DX270X06.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEOkjIeR.js";import"./preload-helper-39HDiriG.js";import"./Table-Cm1zmFBp.js";import"./index-seJCcwx0.js";import"./Dialog-DiLz0XQ4.js";import"./cross-CKjM0IJA.js";import"./svgIconContainer-j0iPz0xP.js";import"./useBaseUiId-DX7AvzL6.js";import"./InternalBackdrop-BjPX4DaQ.js";import"./composite-02otrQol.js";import"./index-DOrwx4ox.js";import"./index-BV9_SaTX.js";import"./index-fcZuwg4_.js";import"./useEventCallback-DqnyWBUG.js";import"./SkeletonBar-DTCVeuOr.js";import"./LoadingCell-Cxdnzx9B.js";import"./ColumnConfigDialog-DnyF6P4z.js";import"./DraggableList-4bPUmXfn.js";import"./search-B9c9IUJL.js";import"./Input-aUjsDD_S.js";import"./useControlled-BjfgiGuC.js";import"./isEqual-vos-yDjT.js";import"./isObject-BikITpyp.js";import"./Button-DDnd28Ua.js";import"./ActionButton-To3utIpL.js";import"./Checkbox-CEm1K9hX.js";import"./useValueChanged-DF2Ro_hc.js";import"./CollapsiblePanel-BkJVDq8v.js";import"./MultiColumnSortDialog-BvdVoeew.js";import"./MenuTrigger-BWSPLmCS.js";import"./CompositeItem-DWFZqP11.js";import"./ToolbarRootContext-CDJpuj06.js";import"./getDisabledMountTransitionStyles-BjM-q0Kj.js";import"./getPseudoElementBounds-CZc1qxZw.js";import"./chevron-down-BYHRqgTY.js";import"./index-B0nXunlt.js";import"./error-70eabRvD.js";import"./BaseCbacBanner-C42BTLFx.js";import"./makeExternalStore-DJnA5Pzt.js";import"./Tooltip-pXyO8Ory.js";import"./PopoverPopup-Cm-CCz32.js";import"./toNumber-CvHAYR8q.js";import"./useOsdkClient-lbkGBCiM.js";import"./tick-BBlHqKx_.js";import"./DropdownField-CibN-iRH.js";import"./withOsdkMetrics-B0amdy6Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-D8ujQKLt.js";import{O as p}from"./object-table-F88ZK3D3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bb099huJ.js";import"./preload-helper-DFSc6wRM.js";import"./Table-DSfHpMVD.js";import"./index-9VE5Mn4e.js";import"./Dialog-DDQcNK5N.js";import"./cross-DL4CxuoW.js";import"./svgIconContainer-CCFPJCSW.js";import"./useBaseUiId-DQIJbvft.js";import"./InternalBackdrop-DOlkcASB.js";import"./composite-CqKkE9Tf.js";import"./index-Df4arEo8.js";import"./index-4dyiHwoW.js";import"./index-DcCMilJn.js";import"./useEventCallback-LXYYJHZR.js";import"./SkeletonBar-DGLHZxCg.js";import"./LoadingCell-DJ4HAk4z.js";import"./ColumnConfigDialog-Cu1Jh9Bn.js";import"./DraggableList-D780i88F.js";import"./search-lCLNBJzK.js";import"./Input-BAcEpIh9.js";import"./useControlled-CNmeKwYL.js";import"./Button-DP0uEAZL.js";import"./small-cross-D2ydpxtR.js";import"./ActionButton-mq8eWvOP.js";import"./Checkbox-BDbPm4Oc.js";import"./useValueChanged-D9rrTa67.js";import"./CollapsiblePanel-CrroEgz8.js";import"./MultiColumnSortDialog-BWeQjT91.js";import"./MenuTrigger-Ccyf87By.js";import"./CompositeItem-D1_uZNYL.js";import"./ToolbarRootContext-DDpleV8W.js";import"./getDisabledMountTransitionStyles-DmViJQ0X.js";import"./getPseudoElementBounds-Bt81s7c9.js";import"./chevron-down-Dy0uKQHu.js";import"./index-DEgBJtF2.js";import"./error-e8Ui46gA.js";import"./BaseCbacBanner-x-LLCXPg.js";import"./makeExternalStore-BCYZ0dRc.js";import"./Tooltip-xRA7nyQ0.js";import"./PopoverPopup-BoTh3yWt.js";import"./debounce-Bq0XVY4d.js";import"./useOsdkClient-C0xSXgiQ.js";import"./tick-DqmzPeDQ.js";import"./DropdownField-BvV_qCDF.js";import"./isEqual-Dbwb_nfU.js";import"./withOsdkMetrics-CoHNSoOK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

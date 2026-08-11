import{j as i}from"./iframe-pVQp6_80.js";import{O as p}from"./object-table-cAS_VnQd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFAmLmLz.js";import"./preload-helper-DvrEbwMF.js";import"./Table-C4OuJWKq.js";import"./index-BKHZTTuk.js";import"./Dialog-C4aRVyOz.js";import"./cross-p15vEzF4.js";import"./svgIconContainer-CLNzJqq-.js";import"./useBaseUiId-CFh57Y09.js";import"./InternalBackdrop-DQioF-Ai.js";import"./composite-DXQY7w3G.js";import"./index-rPQo9pxM.js";import"./index-BPbZVciS.js";import"./index-DEht1joJ.js";import"./useEventCallback-BKZyMEkx.js";import"./SkeletonBar-Cb3aiOU-.js";import"./LoadingCell-DFCnWyZX.js";import"./ColumnConfigDialog-Csb-f-G8.js";import"./DraggableList-DToh6N06.js";import"./search-DKMeJpmh.js";import"./Input-BEUZb4Zo.js";import"./useControlled-rB5MAIpC.js";import"./isEqual-u1Cjlt50.js";import"./isObject-CB39icel.js";import"./Button-Cgl5xkj-.js";import"./ActionButton-uxghCAx5.js";import"./Checkbox-D7mBHrR7.js";import"./useValueChanged-DF6AXwIs.js";import"./CollapsiblePanel--leL7Bz0.js";import"./MultiColumnSortDialog-B2Vgx8lm.js";import"./MenuTrigger-dBgN3Rwc.js";import"./CompositeItem-DLKVePVU.js";import"./ToolbarRootContext-BWr-STqk.js";import"./getDisabledMountTransitionStyles-DKpRPk7J.js";import"./getPseudoElementBounds-C76l7YaE.js";import"./chevron-down-kqlA2gTm.js";import"./index-B-tGz8RK.js";import"./error-DHHv-x7q.js";import"./BaseCbacBanner-XivDNOEp.js";import"./makeExternalStore-CYd-_mYw.js";import"./Tooltip-CDWahB5d.js";import"./PopoverPopup-DZmOnHRY.js";import"./toNumber-BbTGcjrE.js";import"./useOsdkClient-BufF5Jmy.js";import"./tick-n9oaX1Yg.js";import"./DropdownField-CjuzqDjo.js";import"./withOsdkMetrics-CIu58Hun.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

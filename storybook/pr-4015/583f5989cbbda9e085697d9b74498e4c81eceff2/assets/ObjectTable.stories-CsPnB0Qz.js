import{j as i}from"./iframe-DXJ7n1Mt.js";import{O as p}from"./object-table-C9iUs_pB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKSU-XC3.js";import"./preload-helper-J-T-Ktwt.js";import"./Table-BtAWTgx_.js";import"./index-BI3hFpTv.js";import"./Dialog-CV-I8Cmc.js";import"./cross-DmSTTtGj.js";import"./svgIconContainer-Cy-yvyP2.js";import"./useBaseUiId-CYKekcVM.js";import"./InternalBackdrop-DDjs_3_h.js";import"./composite-Br3qqN8V.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./index-BfPkbabJ.js";import"./useEventCallback-DE2r_0Dc.js";import"./SkeletonBar-C2wmfKY_.js";import"./LoadingCell-MVk8M1F_.js";import"./ColumnConfigDialog-D58-ins6.js";import"./DraggableList-COSKQo83.js";import"./search-CS5luSCI.js";import"./Input-Cdu0Ne1b.js";import"./useControlled-DcXpzJX2.js";import"./Button-B1cldSa1.js";import"./small-cross-Bj0C9Gd0.js";import"./ActionButton--bYsYf66.js";import"./Checkbox-B0ntZnQU.js";import"./useValueChanged-CziH8SsH.js";import"./CollapsiblePanel-lE4KEPz7.js";import"./MultiColumnSortDialog-D_ET05Qr.js";import"./MenuTrigger-B0cYrf69.js";import"./CompositeItem-Btxqtw0m.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./getDisabledMountTransitionStyles-DkNiKvvo.js";import"./getPseudoElementBounds-DRUex6O1.js";import"./chevron-down-zhZwP9mu.js";import"./index-CP1UTh8c.js";import"./error-9QZoIHyb.js";import"./BaseCbacBanner-ChfQU8z9.js";import"./makeExternalStore-BQUk64un.js";import"./Tooltip-DjRrr2Ut.js";import"./PopoverPopup-PPlNSATF.js";import"./debounce-BShPyhNf.js";import"./useOsdkClient-CbGeUOIk.js";import"./tick-6IruXiCw.js";import"./DropdownField-oynydTCh.js";import"./isEqual-BY-qrHy9.js";import"./withOsdkMetrics-AS-zNNJp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

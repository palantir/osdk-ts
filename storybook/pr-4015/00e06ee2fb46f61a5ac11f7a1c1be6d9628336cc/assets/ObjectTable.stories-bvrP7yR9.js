import{j as i}from"./iframe-BqB00GiJ.js";import{O as p}from"./object-table-C2NKZ5Ei.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BykhRnMh.js";import"./preload-helper-CBNowE1F.js";import"./Table-YLFb9JTa.js";import"./index-B6ljFb81.js";import"./Dialog-DxiqR021.js";import"./cross-NroKy72c.js";import"./svgIconContainer-BKScRVgJ.js";import"./useBaseUiId-BOd5ixEm.js";import"./InternalBackdrop-BrgH0B3m.js";import"./composite-pnQuH5Q_.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./index-9yoITr-1.js";import"./useEventCallback-D3Kfk8Ap.js";import"./SkeletonBar-CqIDeBXY.js";import"./LoadingCell-BZUln8hk.js";import"./ColumnConfigDialog-Bm9Omtos.js";import"./DraggableList-DQlXK6nA.js";import"./search-Bz2m71mS.js";import"./Input-BuKObC1x.js";import"./useControlled-BB4FINPW.js";import"./Button-UzxjVW7Z.js";import"./small-cross-DuiafL3Y.js";import"./ActionButton-DkxsgQ7J.js";import"./Checkbox-Cxps6qHC.js";import"./useValueChanged-vVuVXkf4.js";import"./CollapsiblePanel-Dm2x088n.js";import"./MultiColumnSortDialog-D4aqIUgF.js";import"./MenuTrigger-Dmunabbl.js";import"./CompositeItem-E84gf2Yn.js";import"./ToolbarRootContext-B0-kN55K.js";import"./getDisabledMountTransitionStyles-BLzEUkBl.js";import"./getPseudoElementBounds-DPHULfcE.js";import"./chevron-down-DmxY4RQH.js";import"./index-DIoCyghZ.js";import"./error-D0GZGtsZ.js";import"./BaseCbacBanner-ChsHyYrj.js";import"./makeExternalStore-CanGYDv6.js";import"./Tooltip-NtIdK9rB.js";import"./PopoverPopup-9AX7mF7M.js";import"./debounce-DJYw4rW8.js";import"./useOsdkClient-TXFw7McP.js";import"./tick-km-CKWcD.js";import"./DropdownField-DMGNppZZ.js";import"./isEqual-B_bGdX-y.js";import"./withOsdkMetrics-D9LjqIyU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-bxHnXZZE.js";import{O as p}from"./object-table-BcKyIo6e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UWR0s-rt.js";import"./preload-helper-7NwT3r5e.js";import"./Table-DcAq6LRL.js";import"./index-C6fHHFsn.js";import"./Dialog-BZhGaz9Z.js";import"./cross-BUbLZE-A.js";import"./svgIconContainer-DFa2cGRe.js";import"./useBaseUiId-QHeSB_uY.js";import"./InternalBackdrop-DBcnV2IB.js";import"./composite-16NtQKdD.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./index-Dx6jXTMT.js";import"./useEventCallback-wa1M1mLo.js";import"./SkeletonBar-DXwufme4.js";import"./LoadingCell-CtHiQ1DJ.js";import"./ColumnConfigDialog-DnaJrZAI.js";import"./DraggableList-BEfI0o-j.js";import"./search-B9cWql5S.js";import"./Input-DlQ75Tiv.js";import"./useControlled-DQ7SFQLa.js";import"./Button-CnrUq9Aa.js";import"./small-cross-rdg52v-X.js";import"./ActionButton-CgLa61YP.js";import"./Checkbox-DpXzlc6c.js";import"./useValueChanged-LREb8VW3.js";import"./CollapsiblePanel-BIKCw0VK.js";import"./MultiColumnSortDialog-CeNOFipN.js";import"./MenuTrigger-r7a7qy8M.js";import"./CompositeItem-Dt9_APYR.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./getDisabledMountTransitionStyles-2zUc2nSg.js";import"./getPseudoElementBounds-B5V39s0c.js";import"./chevron-down-MvzNfmay.js";import"./index-B3lVa8tN.js";import"./error-5Rk85rBd.js";import"./BaseCbacBanner-Bs9cyiER.js";import"./makeExternalStore-BU1dPe3S.js";import"./Tooltip-B1qA2z5a.js";import"./PopoverPopup-B4w-OJGK.js";import"./debounce-BCNGKG7N.js";import"./useOsdkClient-CZNO-BM3.js";import"./tick-C0QgRHXL.js";import"./DropdownField-D9Q5H1vn.js";import"./isEqual-vsTmSx-f.js";import"./withOsdkMetrics-iUvejygz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

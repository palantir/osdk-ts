import{j as i}from"./iframe-CXoxL7cT.js";import{O as p}from"./object-table-BWK6B_1N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DyR6SPRR.js";import"./preload-helper-DMJKrzx6.js";import"./Table-CC3y0ZrT.js";import"./index-dBMA5UNn.js";import"./Dialog-CjrRU3bM.js";import"./cross-XQWmBmUb.js";import"./svgIconContainer-DtqPwXsL.js";import"./useBaseUiId-Izmi48hi.js";import"./InternalBackdrop-mxeqeXwO.js";import"./composite-DMCRZOOJ.js";import"./index-UsCrzJ_A.js";import"./index-DzDKHmnK.js";import"./index-BB4QshU1.js";import"./useEventCallback-QfRioJwU.js";import"./SkeletonBar-Du45-Qw4.js";import"./LoadingCell-DPa7KDCm.js";import"./ColumnConfigDialog-xmha4aKo.js";import"./DraggableList-BEXm3vsR.js";import"./search-D3KEpk03.js";import"./Input-DwAQ3sDB.js";import"./useControlled-CEwBj1Zp.js";import"./Button-Cr7M9AYk.js";import"./small-cross-CKzsSNgv.js";import"./ActionButton-DNc2uAWK.js";import"./Checkbox-CnSbiUC6.js";import"./useValueChanged-DZganrCm.js";import"./CollapsiblePanel-C2HOfB3-.js";import"./MultiColumnSortDialog-DgfnOU7e.js";import"./MenuTrigger-D1Ac7kyx.js";import"./CompositeItem-CWiiOpZY.js";import"./ToolbarRootContext-CoErepAo.js";import"./getDisabledMountTransitionStyles-LOCq1Tqm.js";import"./getPseudoElementBounds-DBTVlom9.js";import"./chevron-down-tGjjwMVx.js";import"./index-DaVoMYUf.js";import"./error-Bnpx40Rp.js";import"./BaseCbacBanner-CW7AFvJP.js";import"./makeExternalStore-CHMRsxiL.js";import"./Tooltip-Ccq41CCY.js";import"./PopoverPopup-BIW3lqxC.js";import"./debounce-BePSlKc6.js";import"./useOsdkClient-Cwyh3mgC.js";import"./tick-LyPFWekw.js";import"./DropdownField-wsN4GW5v.js";import"./isEqual-BXV1tAj-.js";import"./withOsdkMetrics-CqzyuRHa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-ACqoCsP1.js";import{O as p}from"./object-table-DdvQEzYW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfM40SWa.js";import"./preload-helper-B0NytkGS.js";import"./Table-B1oQKcqo.js";import"./index-CH3f4Y4v.js";import"./Dialog-dEbmcWd8.js";import"./cross-CuuQ7UQ8.js";import"./svgIconContainer-DQJmdZ4w.js";import"./useBaseUiId-YELf5DtT.js";import"./InternalBackdrop-CFf_S_SZ.js";import"./composite-ClfvqsWa.js";import"./index-1_maJEvl.js";import"./index-BC4L-KC_.js";import"./index-Dt03mN6M.js";import"./useEventCallback-DT0fpXdJ.js";import"./SkeletonBar-D6sGXdTt.js";import"./LoadingCell-Iu2hiB_z.js";import"./ColumnConfigDialog-DKHcAQDe.js";import"./DraggableList-DBc_xvqf.js";import"./search-CbRnBR_C.js";import"./Input-BoLPhHvH.js";import"./useControlled-Ei_xM4pt.js";import"./Button-D8yf6tNW.js";import"./small-cross-BZDZI6nZ.js";import"./ActionButton-D2spBXFL.js";import"./Checkbox-CLCuVmRM.js";import"./useValueChanged-Bk99V8J2.js";import"./CollapsiblePanel-D1183vDo.js";import"./MultiColumnSortDialog-CEZ5oLIK.js";import"./MenuTrigger-BYXipR9p.js";import"./CompositeItem-CHURugJM.js";import"./ToolbarRootContext-CBorp6LJ.js";import"./getDisabledMountTransitionStyles-BmsT5-21.js";import"./getPseudoElementBounds-DyYkfxLq.js";import"./chevron-down-DSctgGN2.js";import"./index-BI6hNs5F.js";import"./error-CNcF2Rns.js";import"./BaseCbacBanner-o43Y7e9X.js";import"./makeExternalStore-nQn9uS75.js";import"./Tooltip-CiBM08K9.js";import"./PopoverPopup-zwuBMy7m.js";import"./debounce-Brqa7gZb.js";import"./useOsdkClient-B14HLFEC.js";import"./tick-BAuBus17.js";import"./DropdownField-DadyUtow.js";import"./isEqual-CgrJ4P2S.js";import"./withOsdkMetrics-Du2c38Bn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

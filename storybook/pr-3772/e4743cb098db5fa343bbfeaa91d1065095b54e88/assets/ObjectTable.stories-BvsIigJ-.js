import{j as i}from"./iframe-Dtwn1vaw.js";import{O as p}from"./object-table-CEI4N6Za.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXGOzzMo.js";import"./preload-helper-EpvM9Ejn.js";import"./Table-CvnfGKlu.js";import"./index-CunnqZpb.js";import"./Dialog-j3K-chFS.js";import"./cross-BHQxszC7.js";import"./svgIconContainer-izBi4AJd.js";import"./useBaseUiId-Baeg5MQx.js";import"./InternalBackdrop-Bxd08zby.js";import"./composite-C7Srcoag.js";import"./index-ChzJykBZ.js";import"./index-aqrfc_zQ.js";import"./index-B423TLwj.js";import"./useEventCallback-DrxsS8K6.js";import"./SkeletonBar-CaDAhZV5.js";import"./LoadingCell-BNtsK6PU.js";import"./ColumnConfigDialog-ADtA4lCe.js";import"./DraggableList-06D9Mrsz.js";import"./search-CRFQi4jP.js";import"./Input-Cew0RWyc.js";import"./useControlled-Dazae9yM.js";import"./isEqual-BPqr3PbN.js";import"./isObject-DBe7k9DU.js";import"./Button-D7-EaGpa.js";import"./ActionButton-CxI_vRnD.js";import"./Checkbox-D7aMj2qB.js";import"./useValueChanged-QK2zgrTX.js";import"./CollapsiblePanel-B-7lwV-a.js";import"./MultiColumnSortDialog-DUyF4Tr3.js";import"./MenuTrigger-TOQmE5Pc.js";import"./CompositeItem-HRSe5nIw.js";import"./ToolbarRootContext-CQKzf5TQ.js";import"./getDisabledMountTransitionStyles-DMV058GO.js";import"./getPseudoElementBounds-DP8jlLgR.js";import"./chevron-down-C6NPTEnO.js";import"./index-B0n_Y7CH.js";import"./error-BogrZtpi.js";import"./BaseCbacBanner-CxcIFkR6.js";import"./makeExternalStore-B_XP8khw.js";import"./Tooltip-el26iOsi.js";import"./PopoverPopup-CDZymUnO.js";import"./toNumber-BI5qEEAa.js";import"./useOsdkClient-B4zXXxsr.js";import"./tick-DMpW6dCv.js";import"./DropdownField-DNtKIDLm.js";import"./withOsdkMetrics-BJmUIy28.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

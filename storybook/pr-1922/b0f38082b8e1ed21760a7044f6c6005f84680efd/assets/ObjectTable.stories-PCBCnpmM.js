import{j as i}from"./iframe-B6HE8r1l.js";import{O as p}from"./object-table-CQmthn2A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjS0QLDj.js";import"./preload-helper-EtA7hFCh.js";import"./Table-ZoCfFmSU.js";import"./index-BCMaRUjb.js";import"./Dialog-8hzMdC0R.js";import"./cross-BjZ44SU2.js";import"./svgIconContainer-BsDMjwS6.js";import"./useBaseUiId-BzcE0Rie.js";import"./InternalBackdrop-Cf6OlXBD.js";import"./composite-djF9vkGv.js";import"./index-CJscuqzO.js";import"./index-BkMjc3Zz.js";import"./index-TwSuOpr6.js";import"./useEventCallback-D56Fb_o4.js";import"./SkeletonBar-QShiBHjp.js";import"./LoadingCell--dD9SSBp.js";import"./ColumnConfigDialog-B2et3xG9.js";import"./DraggableList-QMdqQUb1.js";import"./search-CcV-m7jj.js";import"./Input-_s7MN3wC.js";import"./useControlled-D5sOiBif.js";import"./Button-ResaMq3t.js";import"./small-cross-C32KlYhe.js";import"./ActionButton-CWQiMZ6U.js";import"./Checkbox-BNADs0cE.js";import"./useValueChanged-BBXwiEUw.js";import"./CollapsiblePanel-BcHGrGjI.js";import"./MultiColumnSortDialog-BdajWTTd.js";import"./MenuTrigger-C5PNYoaH.js";import"./CompositeItem-DP3Bb3vo.js";import"./ToolbarRootContext-BVpWK1U-.js";import"./getDisabledMountTransitionStyles-BIBkvW7t.js";import"./getPseudoElementBounds-DERUGPbz.js";import"./chevron-down-DKIz5-M-.js";import"./index-CUfD7gtD.js";import"./error-BJZjh9bl.js";import"./BaseCbacBanner-Ba5fFkVb.js";import"./makeExternalStore-C0P5U_f9.js";import"./Tooltip-CJZAX-Va.js";import"./PopoverPopup-BVaD9-3k.js";import"./debounce-CG2SWdkE.js";import"./useOsdkClient-Nacbi_ds.js";import"./tick-B6YXw7V4.js";import"./DropdownField-BFB5iTsi.js";import"./isEqual-CvBjiV-s.js";import"./withOsdkMetrics-OQ6oomXn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

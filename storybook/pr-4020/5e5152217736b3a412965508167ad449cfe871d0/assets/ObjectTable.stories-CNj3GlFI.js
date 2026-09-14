import{j as i}from"./iframe-88cR0Kb6.js";import{O as p}from"./object-table-sPJ6fNUO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BTORkuo5.js";import"./preload-helper-YlgatCnn.js";import"./Table-CsDV1Dux.js";import"./index-B3iu9Z4K.js";import"./Dialog-DqUj8fbX.js";import"./cross-vHFr3mSH.js";import"./svgIconContainer-BWrQPgSJ.js";import"./useBaseUiId-DM5phI6w.js";import"./InternalBackdrop-DdO1TR54.js";import"./composite-D2yt_gez.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./index-TuaMuo_5.js";import"./useEventCallback-BY6bNS44.js";import"./SkeletonBar-DL6i_PYS.js";import"./LoadingCell-Q6oUQvVQ.js";import"./ColumnConfigDialog-Cdup8hG_.js";import"./DraggableList-BSEACjIX.js";import"./search-D2eeLv3Q.js";import"./Input-CBeXc1FM.js";import"./useControlled-B1WACGZl.js";import"./Button-CfFrXY9_.js";import"./small-cross-TgiDvwiu.js";import"./ActionButton-DilKZ_dk.js";import"./Checkbox-DTID00qk.js";import"./useValueChanged-CKD-6pQy.js";import"./CollapsiblePanel-LjlawlAT.js";import"./MultiColumnSortDialog-C2L2JOK1.js";import"./MenuTrigger-B6iDWpHK.js";import"./CompositeItem-x-J85oX3.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./getDisabledMountTransitionStyles-EWMBCi1t.js";import"./getPseudoElementBounds-CBBgF56s.js";import"./chevron-down-J3WtM_eJ.js";import"./index-CIeymtFj.js";import"./error-B6tbVTJ_.js";import"./BaseCbacBanner-MFdFNXXS.js";import"./makeExternalStore-DzZ4mLu7.js";import"./Tooltip-BDliEVDr.js";import"./PopoverPopup-CPw-5q_W.js";import"./debounce-R5snSJSd.js";import"./useOsdkClient-CQKftRkO.js";import"./tick-BXAWhEKb.js";import"./DropdownField-C6Sig76U.js";import"./isEqual-D3N0BFL-.js";import"./withOsdkMetrics-BByVeH1n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

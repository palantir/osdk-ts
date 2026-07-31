import{j as i}from"./iframe-DlJcn1ee.js";import{O as p}from"./object-table-Q-9wcvLB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIAT44JW.js";import"./preload-helper-BLYSAxZc.js";import"./Table-BVEuulSw.js";import"./index-CkQyG9JZ.js";import"./Dialog-DZ9ANgfT.js";import"./cross-BZzn8J7n.js";import"./svgIconContainer-5ONNfYAu.js";import"./useBaseUiId-CXPuJlvy.js";import"./InternalBackdrop-CMl_3iou.js";import"./composite-zLUhUg_C.js";import"./index-Ci_TDln9.js";import"./index-B8NVU8EY.js";import"./index-CRFa_Oji.js";import"./useEventCallback-BzYAIX-O.js";import"./SkeletonBar-D8i5j12o.js";import"./LoadingCell-B23hYJP7.js";import"./ColumnConfigDialog-B_NNuY9i.js";import"./DraggableList-CW2VwWDS.js";import"./search-Dfke7UKE.js";import"./Input-DpCgc88D.js";import"./useControlled-BS4JJ_gb.js";import"./isEqual-Dj5XWcTF.js";import"./isObject-lc_azX1V.js";import"./Button-BcjZpSmY.js";import"./ActionButton-CyRVfIaS.js";import"./Checkbox-_y4thMap.js";import"./useValueChanged-B-sxgZ-V.js";import"./CollapsiblePanel-DR2SXRzl.js";import"./MultiColumnSortDialog-CBn8vDWw.js";import"./MenuTrigger-BmtLNfQI.js";import"./CompositeItem-o1wZxKIg.js";import"./ToolbarRootContext-BPqNmhML.js";import"./getDisabledMountTransitionStyles-BShYQ_ND.js";import"./getPseudoElementBounds-B_9H0YsL.js";import"./chevron-down-DPOW8KDp.js";import"./index-BzFfhsxG.js";import"./error-CS0Z81pt.js";import"./BaseCbacBanner-B88gwSPJ.js";import"./makeExternalStore-DRpXALfh.js";import"./Tooltip-C1fCKEvH.js";import"./PopoverPopup-CUht9G04.js";import"./toNumber-dJIfe93O.js";import"./useOsdkClient-C5xFnNI3.js";import"./tick-JBy8ffy-.js";import"./DropdownField-BtUFSNhq.js";import"./withOsdkMetrics-a2bLSbfF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
